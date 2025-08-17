// src/hooks/useAuth.ts
import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
  const {
    user,
    accessToken,
    login,
    register,
    logout,
    refresh,
    forgotPassword,
    verifyResetCode,
    resetPassword,
  } = useAuthStore();

  return {
    user,
    accessToken,
    login,
    register,
    logout,
    refresh,
    forgotPassword,
    verifyResetCode,
    resetPassword,
  };
};
