import { ReactNode } from "react";

export interface inputFieldInterface {
  label?:string;
  type?:string;
  placeholder?:string;
  name?:string;
  value?:string;
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?:(e:React.ChangeEvent<HTMLInputElement>) => void;
  error?:string;
  required?: boolean;
  icon?: ReactNode;
  accepts?: string;
  touched?: boolean;

}