import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface ValidateFunction {
  (value: any): boolean | string;
}

interface AsyncValidateFunction {
  (value: any): Promise<boolean | string>;
}

interface ValidateRules {
  required?: boolean | string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: Record<string, ValidateFunction>;
}

interface AsyncValidateRules {
  required?: boolean | string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: Record<string, AsyncValidateFunction>;
}

export interface inputProps {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  password?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  rules?: ValidateRules | AsyncValidateRules;
}
