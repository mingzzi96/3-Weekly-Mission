import global from "@/styles/global.module.css";
import Image from "next/image";
import eyeOffIcon from "@/public/assets/images/icons/eye-off-icon.svg";
import eyeOnIcon from "@/public/assets/images/icons/eye-on-icon.svg";
import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface RegisterProps {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  password?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  rules?: {
    required?: boolean | string;
    pattern?: {
      value: RegExp;
      message: string;
    };
    validate?: Record<string, (value: any) => boolean | string>;
  };
}

const Input = ({
  id,
  type,
  name,
  register,
  errors,
  rules,
  password = false,
  placeholder = "내용을 입력하세요",
}: RegisterProps) => {
  const errorMessages = errors && errors[name] ? errors[name]?.message : null;
  const hasError = !!(errors && errorMessages);

  const [isEyeOff, setIsEyeOff] = useState(true);
  const handleClickEyeToggle = () => {
    setIsEyeOff((currentBoolean) => !currentBoolean);
  };

  return (
    <>
      <div className={`${global.inputBox} ${hasError ? global.red : ""}`}>
        {password ? (
          <>
            <input
              id={id}
              type={isEyeOff ? type : "text"}
              placeholder={placeholder}
              className={global.input}
              {...(register && register(name, rules))}
            />
            <button
              type="button"
              className={global.eyeButton}
              onClick={handleClickEyeToggle}
            >
              {isEyeOff ? (
                <Image src={eyeOffIcon} alt="비밀번호 보려면 클릭" />
              ) : (
                <Image src={eyeOnIcon} alt="비밀번호 숨기려면 클릭" />
              )}
            </button>
          </>
        ) : (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={global.input}
            {...(register && register(name, rules))}
          />
        )}
      </div>
      {hasError && typeof errorMessages === "string" ? (
        <p aria-live="assertive" className={global.inputErrorMessage}>
          {errorMessages}
        </p>
      ) : null}
    </>
  );
};

export default Input;
