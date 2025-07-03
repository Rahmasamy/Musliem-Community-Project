import { ButtonProps as OriginalButtonProps } from "../interfaces/Button.types";

interface ButtonProps extends OriginalButtonProps {
  type?: "submit" | "reset" | "button";
}

const AuthButton:React.FC<ButtonProps> = ({
    label,variant = 'primary',type = 'submit' ,  className = 'AuthButton',...props
}) => {
  const baseStyles = " rounded-md text-white font-meduim transition duration-200 text-sm text-align-center"
  const variants = {
    'primary': 'bg-[#1C7A80] text-white hover:bg-[#004f48] border-none w-10/12',
    'secondary' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  }
  return (
     <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      type={type}
      {...props}
    >
      {label}
    </button>
  )
}
export default AuthButton;