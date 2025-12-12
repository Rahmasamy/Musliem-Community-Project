import React from 'react';
import { inputFieldInterface } from '../interfaces/inputField.types';

const CommonInput: React.FC<inputFieldInterface> = ({
  label,
  type = 'text',
  placeholder = '',
  name,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  icon,
  accepts,
  disabled,
  useRef,
  defaultValue,
  onKeyDown,
}) => {
  const hasIcon = !!icon;

  return (
    <div className="mb-4 w-full">
      {/* Label */}
      {label && (
        <label htmlFor={name} className="block text-sm text-gray-700 mb-1 cursor-pointer">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Icon (only for non-file inputs) */}
        {hasIcon && type !== 'file' && (
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500">{icon}</span>
          </span>
        )}

        {/* File Input Icon (clickable label) */}
        {hasIcon && type === 'file' && (
          <label htmlFor={name} className="cursor-pointer absolute inset-0 flex items-center pl-3">
            <span className="text-gray-500">{icon}</span>
          </label>
        )}

        {/* Main Input */}
        <input
          ref={useRef}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          required={required}
          disabled={disabled}
          accept={accepts}
          className={`
            w-full
            px-4 py-2.5
            border rounded-lg
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${hasIcon && type !== 'file' ? 'pl-10' : 'pl-4'}  /* Left padding for icon */
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
          `}
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CommonInput;