import { ReactNode } from "react";

export interface inputFieldInterface {
  label?:string;
  type?:string;
  placeholder?:string;
  name?:string;
  value?:string;
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?:(e:React.ChangeEvent<HTMLInputElement>) => void;
  disabled?:boolean;
  useRef?:React.Ref<HTMLInputElement>
  error?:string;
  required?: boolean;
  icon?: ReactNode;
  accepts?: string;
  touched?: boolean;
  defaultValue? :string;
  onKeyDown?:(e:React.KeyboardEvent<HTMLInputElement>) => void
  hideIconOnClick?: boolean;

}