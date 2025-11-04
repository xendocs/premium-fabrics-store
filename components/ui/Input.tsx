import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-2.5 rounded-xl border transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-0
          bg-white text-neutral-900
          ${
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-100'
          }
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-xs text-neutral-500">{helperText}</p>
      )}
    </div>
  );
};

