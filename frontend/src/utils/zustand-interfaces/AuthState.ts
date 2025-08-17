
import { ForgotPasswordPayload, LoginPayload, RegisterPayload,VerifyCodePayload,ResetPasswordPayload, User, VerifyCodeResponse } from "@/types/authTypes";

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  message? : string;
  token?:string;
  login: (loginPayload :LoginPayload) => Promise<void>;
  register: (registPayload : RegisterPayload) => Promise<void>;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (ForgetPassword: ForgotPasswordPayload) => Promise<void>;
  verifyResetCode: (VerifyCodePayload:VerifyCodePayload) => Promise<VerifyCodeResponse>;
  resetPassword: (ResetPasswordPayload:ResetPasswordPayload,token:string) => Promise<void>;
}