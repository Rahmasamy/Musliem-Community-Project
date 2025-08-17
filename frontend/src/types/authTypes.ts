// src/types/auth.types.ts
export interface User {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  phoneNumber?: string;
  skills?: string[];
  bio?: string;
  token: string;
}

export interface AuthResponse {
  user: User;
}

export interface LoginPayload {
  email: string;
  password: string;
}



export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  role: string;
  skills?: string[];
  bio?: string;
}


export interface ForgotPasswordPayload {
  email: string;
}
export interface ForgetPasswordResponse {
    message: string
}
export interface VerifyCodePayload {
  code: string;
}
export interface VerifyCodeResponse {
  message: string;
  token: string;
}

export interface ResetPasswordResponse {
    message: string
}
export interface ResetPasswordPayload {
 
  password: string;
}

