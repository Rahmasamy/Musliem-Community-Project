// src/utils/tokenUtils.ts
export const setAccessToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const clearAccessToken = () => {
  localStorage.removeItem("accessToken");
};