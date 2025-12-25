import { useState, useRef } from "react";
import { Mail } from "lucide-react";

// Mock components for demonstration
const LogoComponent = ({ desc }: { desc: React.ReactNode }) => (
  <div className="flex flex-col items-center gap-2 w-full">
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
      <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    </div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 text-center">
      {desc}
    </h1>
  </div>
);

const AuthButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="w-full py-3 sm:py-3.5 md:py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg text-base sm:text-lg"
  >
    {label}
  </button>
);

export default function LeftVerify() {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const updated = [...code];
    updated[index] = value;
    setCode(updated);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otp = code.join("");
    console.log("Verifying code:", otp);
    alert(`Code: ${otp}`);
  };

  const handleResend = () => {
    console.log("Resending code...");
    alert("Code resent!");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-white">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <div className="LoginForm flex flex-col justify-center items-start gap-4 sm:gap-6">
          <div className="img-desc flex flex-col w-full items-center gap-3 sm:gap-4">
            <LogoComponent desc="Verify Your Email" />

            <div className="para text-center px-2">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                We've sent a 6-digit code to your email.
                <br />
                Please enter it below to continue.
              </p>
            </div>

            <div className="inputFields w-full flex flex-col gap-5 sm:gap-6 items-start mt-4 sm:mt-6">
              <div className=" w-full flex justify-center">
                <div className=" flex gap-2 sm:gap-3 md:gap-4">
                  {code.map((digit, idx) => (
                    <input
                      key={idx}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      className=" text-center text-lg sm:text-xl md:text-2xl font-semibold border-2 border-gray-300 rounded-md w-10 h-10 sm:w-[100% /6] sm:h-12 md:w-14 md:h-14 focus:border-gray-800 focus:ring-2 focus:ring-gray-200 outline-none transition-all duration-200"
                      value={digit}
                      ref={(el) => (inputRefs.current[idx] = el)}
                      onChange={(e) => handleChange(idx, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(idx, e)}
                    />
                  ))}
                </div>
              </div>

              {/* <div className="text-center w-full">
                <p className="text-xs sm:text-sm text-gray-600">
                  Didn't receive the code?{" "}
                  <button
                    onClick={handleResend}
                    className="text-gray-800 hover:text-gray-600 font-semibold underline transition-colors"
                  >
                    Resend
                  </button>
                </p>
              </div> */}
              <div className="AuthBtnContainer w-full flex justify-center items-center">
                <AuthButton
                  label="Verify"
                  variant="primary"
                  type="submit"
                  onClick={handleVerify}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
