declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXT_PUBLIC_APP_NAME: string;
    }
  }
}

export {};
