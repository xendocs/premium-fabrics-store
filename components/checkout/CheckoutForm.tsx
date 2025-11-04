'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema, type CheckoutFormData } from '@/utils/validation';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { PaymentMethods } from './PaymentMethods';
import { Card } from '@/components/ui/Card';

export const CheckoutForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: '',
      sameAsShipping: true,
      paymentMethod: 'card',
      shippingAddress: {
        firstName: '',
        lastName: '',
        company: '',
        address1: '',
        address2: '',
        city: '',
        state: 'MH',
        zip: '',
        country: 'IN',
        phone: '',
      },
      billingAddress: {
        country: 'IN',
      },
    },
    mode: 'onSubmit',
  });

  const sameAsShipping = watch('sameAsShipping', true);
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      // Trim all string values
      const cleanData = {
        ...data,
        email: data.email.trim(),
        shippingAddress: {
          ...data.shippingAddress,
          firstName: data.shippingAddress.firstName.trim(),
          lastName: data.shippingAddress.lastName.trim(),
          address1: data.shippingAddress.address1.trim(),
          address2: data.shippingAddress.address2.trim(),
          city: data.shippingAddress.city.trim(),
          zip: data.shippingAddress.zip.trim(),
          phone: data.shippingAddress.phone.trim(),
        },
      };

      console.log('Checkout data:', cleanData);
      
      // Simulate successful order processing
      const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;
      
      // Redirect to success page
      window.location.href = `/order-success?order=${orderNumber}&email=${encodeURIComponent(cleanData.email)}`;
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  // Indian states and union territories
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Email */}
      <Card className="p-6 border border-neutral-200 shadow-sm">
        <h2 className="text-lg font-serif font-semibold mb-4 text-neutral-900">Contact Information</h2>
        <Input
          label="Email Address"
          type="email"
          placeholder="yourname@gmail.com"
          {...register('email')}
          error={errors.email?.message}
          required
        />
      </Card>

      {/* Shipping Address */}
      <Card className="p-6 border border-neutral-200 shadow-sm">
        <h2 className="text-lg font-serif font-semibold mb-4 text-neutral-900">Shipping Address</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              label="First Name"
              placeholder="Rajesh"
              {...register('shippingAddress.firstName')}
              error={errors.shippingAddress?.firstName?.message}
              required
            />
            <Input
              label="Last Name"
              placeholder="Kumar"
              {...register('shippingAddress.lastName')}
              error={errors.shippingAddress?.lastName?.message}
              required
            />
          </div>
          <Input
            label="Mobile Number"
            type="tel"
            placeholder="+91 98765 43210"
            {...register('shippingAddress.phone')}
            error={errors.shippingAddress?.phone?.message}
            required
          />
          <Input
            label="House No., Building Name"
            placeholder="Plot No. 123, Green Apartments"
            {...register('shippingAddress.address1')}
            error={errors.shippingAddress?.address1?.message}
            required
          />
          <Input
            label="Road Name, Area, Colony"
            placeholder="MG Road, Indiranagar"
            {...register('shippingAddress.address2')}
            error={errors.shippingAddress?.address2?.message}
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              label="Landmark (Optional)"
              placeholder="Near Metro Station"
              {...register('shippingAddress.company')}
              error={errors.shippingAddress?.company?.message}
            />
            <Input
              label="City / District"
              placeholder="Mumbai"
              {...register('shippingAddress.city')}
              error={errors.shippingAddress?.city?.message}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Select
              label="State / Union Territory"
              options={indianStates}
              {...register('shippingAddress.state')}
              error={errors.shippingAddress?.state?.message}
              required
            />
            <Input
              label="PIN Code"
              placeholder="400001"
              maxLength={6}
              {...register('shippingAddress.zip')}
              error={errors.shippingAddress?.zip?.message}
              required
            />
          </div>
          <input type="hidden" {...register('shippingAddress.country')} value="IN" />
        </div>
      </Card>

      {/* Billing Address */}
      <Card className="p-6 border border-neutral-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <h2 className="text-lg font-serif font-semibold text-neutral-900">Billing Address</h2>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              {...register('sameAsShipping')}
              className="w-4 h-4 text-primary-600 rounded border-neutral-300 focus:ring-2 focus:ring-primary-100"
            />
            <span className="text-sm text-neutral-700">Same as shipping address</span>
          </label>
        </div>
        {!sameAsShipping && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input
                label="First Name"
                placeholder="Rajesh"
                {...register('billingAddress.firstName')}
                error={errors.billingAddress?.firstName?.message}
                required
              />
              <Input
                label="Last Name"
                placeholder="Kumar"
                {...register('billingAddress.lastName')}
                error={errors.billingAddress?.lastName?.message}
                required
              />
            </div>
            <Input
              label="Mobile Number"
              type="tel"
              placeholder="+91 98765 43210"
              {...register('billingAddress.phone')}
              error={errors.billingAddress?.phone?.message}
              required
            />
            <Input
              label="House No., Building Name"
              placeholder="Plot No. 456, Blue Heights"
              {...register('billingAddress.address1')}
              error={errors.billingAddress?.address1?.message}
              required
            />
            <Input
              label="Road Name, Area, Colony"
              placeholder="Residency Road, Koramangala"
              {...register('billingAddress.address2')}
              error={errors.billingAddress?.address2?.message}
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input
                label="Landmark (Optional)"
                placeholder="Near City Mall"
                {...register('billingAddress.company')}
                error={errors.billingAddress?.company?.message}
              />
              <Input
                label="City / District"
                placeholder="Bangalore"
                {...register('billingAddress.city')}
                error={errors.billingAddress?.city?.message}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Select
                label="State / Union Territory"
                options={indianStates}
                {...register('billingAddress.state')}
                error={errors.billingAddress?.state?.message}
                required
              />
              <Input
                label="PIN Code"
                placeholder="560001"
                maxLength={6}
                {...register('billingAddress.zip')}
                error={errors.billingAddress?.zip?.message}
                required
              />
            </div>
            <input type="hidden" {...register('billingAddress.country')} value="IN" />
          </div>
        )}
      </Card>

      {/* Payment Method */}
      <Card className="p-6 border border-neutral-200 shadow-sm">
        <h2 className="text-lg font-serif font-semibold mb-4 text-neutral-900">Payment Method</h2>
        <PaymentMethods
          selectedMethod={paymentMethod}
          onMethodSelect={setPaymentMethod}
        />
      </Card>

      {/* Submit Button */}
      <div className="pt-2">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full font-semibold text-base py-4 hover:scale-[1.01] transition-transform"
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

