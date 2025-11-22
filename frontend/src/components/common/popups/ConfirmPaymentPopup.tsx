import { IoClose } from "react-icons/io5";
import CancelBtn from "../cancel-btn/CancelBtn";
import ConfirmBtn from "../confirm-btn/ConfirmBtn";
import { FaRegQuestionCircle } from "react-icons/fa";

type ConfirmPopupProps = {
  onClose?: () => void;
  onConfirm?: () => void;
};
export default function ConfirmPaymentPopup({ onClose,onConfirm }: ConfirmPopupProps) {
  return (
    <div className="fixed top-0 left-0 z-150 w-full h-full flex items-center justify-center ">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="relative bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-xl z-50">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-teal-500 text-2xl"
          onClick={onClose}
        >
          <IoClose />
        </button>
        <div className="flex justify-center items-center flex-col gap-4">
          <span className="text-6xl text-orange-400 text-center w-full flex justify-center items-center">
            <FaRegQuestionCircle  />
          </span>
          <h1 className="font-bold text-xl p-2 ">
            Are you sure you want to processed?
            
          </h1>
          <span className="text-gray-400 text-xl! font-semibold">

            This action need to pay $150
            </span>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <CancelBtn onClick={onClose!} />
          <ConfirmBtn onClick={onConfirm} title="Confirm Payment" />
        </div>
      </div>
    </div>
  );
}
