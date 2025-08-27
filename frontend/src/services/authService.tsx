import {
  LoginPayload,
  RegisterPayload,
  ForgotPasswordPayload,
  VerifyCodePayload,
  ResetPasswordPayload,
  ForgetPasswordResponse,
  User,
  VerifyCodeResponse,
  ResetPasswordResponse,
} from "../types/authTypes";
import axiosInstance from "@/utils/axiosInstance";

const login = async(loginPayload : LoginPayload): Promise<User> => {
  const { data } = await axiosInstance.post("/auth/login",loginPayload)
  return data;
}

const register = async( registerPayload : RegisterPayload): Promise<User> => {
  const { data } = await axiosInstance.post("/auth/register",registerPayload,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return data;
}


const refershToken = async () : Promise<{ accessToken: string }> => {
  const { data } = await axiosInstance.post("/auth/refresh-token");
  return data;
}
const forgotPassword = async (payload: ForgotPasswordPayload): Promise<ForgetPasswordResponse> => {
  const { data } = await axiosInstance.post("/auth/forgot-password", payload);
  return data;

};

const verifyResetCode = async (payload: VerifyCodePayload): Promise<VerifyCodeResponse> => {
  const { data } = await axiosInstance.post("/auth/verify-reset-code", payload);
  return data;
};

const resetPassword = async (payload: ResetPasswordPayload,token:string): Promise<ResetPasswordResponse> => {
  const { data } = await axiosInstance.post("/auth/reset-password", payload,  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export default {
  login,
  register,

  refershToken,
  forgotPassword,
  verifyResetCode,
  resetPassword,
};
