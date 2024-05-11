/// <reference types="vite/client" />

declare module "*.ts"


declare namespace NodeJS {
    interface ProcessEnv {
      readonly REACT_APP_BASE_URL: string
    }
  }


