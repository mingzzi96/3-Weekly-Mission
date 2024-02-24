export interface FormData {
  errors?: {
    email?: {
      message: string;
    };
  };
  email: string;
  password: string;
  passwordConfirm?: string;
}
