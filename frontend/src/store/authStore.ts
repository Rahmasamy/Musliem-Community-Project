import authService from '@/services/authService';
import { ForgotPasswordPayload, LoginPayload, RegisterPayload, ResetPasswordPayload, VerifyCodePayload } from '@/types/authTypes';
import { clearAccessToken, getAccessToken, setAccessToken } from '@/utils/tokenUtils';
import { AuthState } from '@/utils/zustand-interfaces/AuthState';
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  login: async (LoginPayload: LoginPayload) => {
    const data = await authService.login(LoginPayload)
    setAccessToken(data.token);
    set({ user: data })
  },
  register: async (payload: RegisterPayload) => {
  const data = await authService.register(payload);
    setAccessToken(data.token);
    set({ user: data })
  },

  refresh: async () => {
     const data = await authService.refershToken();
    setAccessToken(data.accessToken);
    set({ accessToken: data.accessToken });
  },

  logout: async () => {
    await authService.logout();
    clearAccessToken();
    set({ user: null, accessToken: null });
  },

  forgotPassword: async (payload: ForgotPasswordPayload) => {
    const response = await authService.forgotPassword(payload);
    set({ message: response.message });
  },

  verifyResetCode: async (payload: VerifyCodePayload) => {
  const response = await authService.verifyResetCode(payload)
  console.log("auth store",response.token)
   setAccessToken(response.token);
   set({ message: response.message,accessToken:response.token });
    return response;
  },

  resetPassword: async (payload: ResetPasswordPayload,token:string) => {
    const response = await authService.resetPassword({...payload},token);
   
    set({ message: response.message});
  }
}))