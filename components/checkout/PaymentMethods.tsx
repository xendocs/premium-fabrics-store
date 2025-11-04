'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { CreditCardIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

interface PaymentMethodsProps {
  selectedMethod: string;
  onMethodSelect: (method: string) => void;
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  selectedMethod,
  onMethodSelect,
}) => {
  const methods = [
    { id: 'card', label: 'Credit/Debit Card', icon: CreditCardIcon },
    { id: 'upi', label: 'UPI (India)', icon: DevicePhoneMobileIcon },
    { id: 'razorpay', label: 'Razorpay (India)', icon: DevicePhoneMobileIcon },
    { id: 'apple_pay', label: 'Apple Pay', icon: DevicePhoneMobileIcon },
    { id: 'google_pay', label: 'Google Pay', icon: DevicePhoneMobileIcon },
    { id: 'paypal', label: 'PayPal', icon: GlobeAltIcon },
    { id: 'pay_later', label: 'Pay Later', icon: CreditCardIcon },
  ];

  return (
    <div className="space-y-4">
      {/* Payment Method Selection */}
      <div className="space-y-2">
        {methods.map((method) => {
          const Icon = method.icon;
          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onMethodSelect(method.id)}
              className={`
                w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3
                ${
                  selectedMethod === method.id
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }
              `}
            >
              <Icon className="h-5 w-5 text-neutral-600" />
              <span className="font-medium text-sm text-neutral-900">{method.label}</span>
              {selectedMethod === method.id && (
                <div className="ml-auto w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Payment Details - Conditional based on method */}
      {selectedMethod === 'card' && (
        <div className="mt-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
          <p className="text-sm font-medium text-neutral-900 mb-3">Card Details</p>
          <Input
            label="Card Number"
            type="text"
            placeholder="1234 5678 9012 3456"
            maxLength={19}
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Expiry Date"
              type="text"
              placeholder="MM/YY"
              maxLength={5}
            />
            <Input
              label="CVV"
              type="text"
              placeholder="123"
              maxLength={4}
            />
          </div>
          <Input
            label="Cardholder Name"
            type="text"
            placeholder="John Doe"
          />
        </div>
      )}

      {selectedMethod === 'upi' && (
        <div className="mt-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
          <p className="text-sm font-medium text-neutral-900 mb-3">UPI Details</p>
          <Input
            label="UPI ID"
            type="text"
            placeholder="yourname@upi"
          />
          <p className="text-xs text-neutral-500">Enter your UPI ID to complete payment</p>
        </div>
      )}

      {selectedMethod === 'razorpay' && (
        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm text-neutral-900 mb-2">
            <span className="font-semibold">Razorpay</span> - Quick & Secure
          </p>
          <p className="text-xs text-neutral-600">
            You will be redirected to Razorpay to complete your payment securely with UPI, cards, or net banking.
          </p>
        </div>
      )}

      {selectedMethod === 'paypal' && (
        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm text-neutral-900 mb-2">
            <span className="font-semibold">PayPal</span> - Safe & Trusted
          </p>
          <p className="text-xs text-neutral-600">
            You will be redirected to PayPal to log in and complete your payment securely.
          </p>
        </div>
      )}

      {(selectedMethod === 'apple_pay' || selectedMethod === 'google_pay') && (
        <div className="mt-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
          <p className="text-sm text-neutral-900 mb-2">
            <span className="font-semibold">{selectedMethod === 'apple_pay' ? 'Apple Pay' : 'Google Pay'}</span> - One-Click Checkout
          </p>
          <p className="text-xs text-neutral-600">
            Click "Complete Order" to proceed with {selectedMethod === 'apple_pay' ? 'Apple Pay' : 'Google Pay'}.
          </p>
        </div>
      )}

      {selectedMethod === 'pay_later' && (
        <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
          <p className="text-sm text-neutral-900 mb-2">
            <span className="font-semibold">Pay Later</span> - Flexible Payment
          </p>
          <p className="text-xs text-neutral-600">
            Complete your order now and pay later in easy installments. Subject to approval.
          </p>
        </div>
      )}
    </div>
  );
};

