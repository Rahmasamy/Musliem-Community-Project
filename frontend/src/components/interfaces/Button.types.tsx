import React from "react";
export type ButtonVariant =  'primary' | 'secondary';
export interface ButtonProps extends React.BaseHTMLAttributes<HTMLButtonElement> {
  label:string;
  variant?:ButtonVariant;
  type?:string;
}