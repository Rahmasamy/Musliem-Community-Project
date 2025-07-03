
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './GoBack.css'
export default function 
() {
    const navigate =useNavigate()
  return (
    <div className="relative">
        <div className="go-back-container absolute cursor-pointer">
    <MdOutlineKeyboardBackspace onClick={() => navigate(-1)} />
  </div>
     
  
    </div>
  )
}
