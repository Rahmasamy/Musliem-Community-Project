import React from 'react'
import { inputFieldInterface } from '../interfaces/inputField.types'
import './Common.css'

const CommonInput: React.FC<inputFieldInterface> = ({
  label,
  type = "text",
  placeholder = '',
  name,
  value,
  onChange,
  error,
  required = false,
  icon
}) => {
  return (
    <div className='mb-4 w-10/12'>
      <div className="label p-1">
        {label && (
          <label className='block text-sm text-gray-700 mb-1'>
            {label}
          </label>
        )}
      </div>

      <div className="relative w-full">
        {icon && (
          <span className="iconinput absolute left-2 top-2 flex items-center pointer-events-none">
            {icon}
          </span>
        )}

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`inputFieldCommon w-full ${icon ? 'pl-10' : 'pl-4'} py-2 border rounded-md ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />

        {error && <p className="error text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  )
}

export default CommonInput
