/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  // add more env vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Fix window.paypal
interface Window {
  paypal?: any;
}

// Fix all image imports (.png, .jpg, etc.)
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const src: string;
  export default src;
}