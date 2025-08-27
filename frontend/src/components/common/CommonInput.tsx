import React from 'react';
import { inputFieldInterface } from '../interfaces/inputField.types';
import './Common.css';

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
  touched,
  accepts,
  disabled,
   useRef,
   defaultValue,
   onKeyDown
  
}) => {
  const labelSection = label && (
    <div className="label p-1">
      <label className="cursor-pointer block text-sm text-gray-700 mb-1"  htmlFor={name}>{label}</label>
    </div>
  );

  const inputElement = (
    <>
      {/* Icon for non-file */}
      {icon && type !== 'file' && (
        <label htmlFor={name} >

        <span className="iconinput absolute left-2 top-2 flex items-center pointer-events-none">
          {icon}
        </span>
        </label>
      )}

      {/* Icon for file */}
      {icon && type === 'file' && (
        <label htmlFor={name}  className="cursor-pointer file-upload-label">

            <span className="fileIcon">{icon}</span>
        </label>
      )}

      <input
        ref = {useRef}
        disabled={disabled}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`flex-1 inputFieldCommon w-full ${icon ? 'pl-10' : 'pl-4'} py-2 border rounded-md ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        accept={accepts}
        defaultValue={defaultValue}
        onKeyDown={onKeyDown}
      />

     { error && (
  <p className="error text-red-500 text-xs mt-1">{error}</p>
)}
    </>
  );

  const inputContainer =
    type !== 'file' ? (
      <div className="relative w-full">{inputElement}</div>
    ) : (
      inputElement
    );


  return type !== 'file' ? (
    <div className="mb-4 w-full">
      {labelSection}
      {inputContainer}
    </div>
  ) : (
    <>
      {labelSection}
      {inputContainer}
    </>
  );
};

export default CommonInput;
