import { ReactNode } from "react";

export default interface OrangeBtn {
  title:string,
  icon? : ReactNode,
  className?:string,
  parentClassName?:string,
  onClick? : () => void,
  disabled?:boolean
  
}