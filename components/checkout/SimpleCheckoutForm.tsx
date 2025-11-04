'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PaymentMethods } from './PaymentMethods';
import { toast } from 'react-hot-toast';

export const SimpleCheckoutForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    mobile: '',
    building: '',
    area: '',
    landmark: '',
    city: '',
    state: 'MH',
    pincode: '',
    sameAsShipping: true,
    paymentMethod: 'card',
  });

  const indianStates = [
    { value: 'AN', label: 'Andaman and Nicobar Islands' },
    { value: 'AP', label: 'Andhra Pradesh' },
    { value: 'AR', label: 'Arunachal Pradesh' },
    { value: 'AS', label: 'Assam' },
    { value: 'BR', label: 'Bihar' },
    { value: 'CH', label: 'Chandigarh' },
    { value: 'CT', label: 'Chhattisgarh' },
    { value: 'DN', label: 'Dadra and Nagar Haveli and Daman and Diu' },
    { value: 'DL', label: 'Delhi' },
    { value: 'GA', label: 'Goa' },
    { value: 'GJ', label: 'Gujarat' },
    { value: 'HR', label: 'Haryana' },
    { value: 'HP', label: 'Himachal Pradesh' },
    { value: 'JK', label: 'Jammu and Kashmir' },
    { value: 'JH', label: 'Jharkhand' },
    { value: 'KA', label: 'Karnataka' },
    { value: 'KL', label: 'Kerala' },
    { value: 'LA', label: 'Ladakh' },
    { value: 'LD', label: 'Lakshadweep' },
    { value: 'MP', label: 'Madhya Pradesh' },
    { value: 'MH', label: 'Maharashtra' },
    { value: 'MN', label: 'Manipur' },
    { value: 'ML', label: 'Meghalaya' },
    { value: 'MZ', label: 'Mizoram' },
    { value: 'NL', label: 'Nagaland' },
    { value: 'OR', label: 'Odisha' },
    { value: 'PY', label: 'Puducherry' },
    { value: 'PB', label: 'Punjab' },
    { value: 'RJ', label: 'Rajasthan' },
    { value: 'SK', label: 'Sikkim' },
    { value: 'TN', label: 'Tamil Nadu' },
    { value: 'TG', label: 'Telangana' },
    { value: 'TR', label: 'Tripura' },
    { value: 'UP', label: 'Uttar Pradesh' },
    { value: 'UT', label: 'Uttarakhand' },
    { value: 'WB', label: 'West Bengal' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!formData.firstName || !formData.lastName) {
      toast.error('Please enter your full name');
      return;
    }

    if (!formData.mobile || formData.mobile.length < 10) {
      toast.error('Please enter a valid mobile number');
      return;
    }

    if (!formData.building || !formData.area || !formData.city) {
      toast.error('Please enter your complete address');
      return;
    }

    if (!formData.pincode || formData.pincode.length !== 6) {
      toast.error('Please enter a valid 6-digit PIN code');
      return;
    }

    // All validation passed!
    const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;
    router.push(`/order-success?order=${orderNumber}&email=${encodeURIComponent(formData.email)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <Card className="p-6 border border-neutral-200 shadow-sm">
        <h2 className="text-lg font-serif font-semibold mb-4 text-neutral-900">Contact Information</h2>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yourname@gmail.com"
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
            required
          />
        </div>
      </Card>

      {/* Shipping Address */}
      <Card className="p-6 border border-neutral-200 shadow-sm">
        <h2 className="text-lg font-serif font-semibold mb-4 text-neutral-900">Shipping Address</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Rajesh"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Kumar"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              House No., Building Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="building"
              value={formData.building}
              onChange={handleChange}
              placeholder="Plot No. 123, Green Apartments"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Road Name, Area, Colony <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="MG Road, Indiranagar"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Landmark (Optional)
              </label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                placeholder="Near Metro Station"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                City / District <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Mumbai"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                State / Union Territory <span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900 appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.75rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem',
                }}
                required
              >
                {indianStates.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                PIN Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="400001"
                maxLength={6}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
                required
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Billing Address */}
      <Card className="p-6 border border-neutral-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-serif font-semibold text-neutral-900">Billing Address</h2>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="sameAsShipping"
              checked={formData.sameAsShipping}
              onChange={handleChange}
              className="w-4 h-4 text-primary-600 rounded border-neutral-300"
            />
            <span className="text-sm text-neutral-700">Same as shipping address</span>
          </label>
        </div>

        {/* Show billing address fields only when NOT same as shipping */}
        {!formData.sameAsShipping && (
          <div className="space-y-3 pt-4 border-t border-neutral-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="billingFirstName"
                  placeholder="Rajesh"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="billingLastName"
                  placeholder="Kumar"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="billingMobile"
                placeholder="+91 9876543210"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                House No., Building Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="billingBuilding"
                placeholder="Plot No. 123, Green Apartments"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Road Name, Area, Colony <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="billingArea"
                placeholder="MG Road, Indiranagar"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  name="billingLandmark"
                  placeholder="Near Metro Station"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  City / District <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="billingCity"
                  placeholder="Mumbai"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  State / Union Territory <span className="text-red-500">*</span>
                </label>
                <select
                  name="billingState"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem',
                  }}
                >
                  {indianStates.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  PIN Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="billingPincode"
                  placeholder="400001"
                  maxLength={6}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900"
                />
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Payment Method */}
      <Card className="p-6 border border-neutral-200 shadow-sm">
        <h2 className="text-lg font-serif font-semibold mb-4 text-neutral-900">Payment Method</h2>
        <PaymentMethods
          selectedMethod={formData.paymentMethod}
          onMethodSelect={(method) => setFormData(prev => ({ ...prev, paymentMethod: method }))}
        />
      </Card>

      {/* Submit Button */}
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full font-semibold text-base py-4 hover:scale-[1.01] transition-transform text-white"
          style={{ 
            background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
            boxShadow: '0 4px 12px rgba(46, 56, 88, 0.3)',
          }}
        >
          Complete Order Securely
        </Button>
        <div className="flex items-center justify-center gap-6 mt-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.8-4.6a9 9 0 11-11.6 0" />
            </svg>
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
    </form>
  );
};

