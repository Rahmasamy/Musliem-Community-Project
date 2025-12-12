import AuthButton from '@/components/common/AuthButton';
import LogoComponent from '@/components/common/logo-component/LogoComponent';
import './Verify.css';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import { useResetStore } from '@/store/resetStore';

export default function LeftVerify() {
  const navigate = useNavigate();
  const { setResetToken } = useResetStore();
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const { verifyResetCode } = useAuth();

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const updated = [...code];
    updated[index] = value;
    setCode(updated);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otp = code.join("");
    try {
      const data = await verifyResetCode({ code: otp });
      setResetToken(data.token);
      toast.success("Two factor Authentication success!");
      navigate('/reset-password');
    } catch (error) {
      toast.error("Two factor Authentication Failed, Please input Valid Code!");
    }
  };

  return (
    <div className='LoginForm flex flex-col justify-center items-start gap-4'>
      <div className="img-desc flex flex-col w-full items-center gap-3">
        <LogoComponent desc={<>Verify Your Email</>} />

        <div className="para">
          <p>
            We’ve sent a 6-digit code to your email.<br />
            <a href="">emmy@gmail.com</a> Please enter it below to continue.
          </p>
        </div>

        <div className="inputFields w-full flex flex-col gap-5 items-start">
          <div className="verify-container flex flex-wrap gap-2">
            <div className="otp-wrapper flex gap-2">
              {code.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  className="otp-box text-center text-xl border rounded-md w-12 h-12"
                  value={digit}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                />
              ))}
            </div>
          </div>

          <div className="AuthBtnContainer w-full flex justify-center items-center">
            <AuthButton
              label="Verify"
              variant="primary"
              type='submit'
              onClick={handleVerify}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
