import { IconArea } from "@components/Input/InputType";
import { InputTransparent } from "@components/Input/InputType";
import GradientButton from "../GradientButton/GradientButton";
import "./AddLinkBar.css";

const AddLinkBar = () => {
  return (
    <>
      <div className="AddLinkBar">
        <IconArea
          backgroundImageUrl={`/assets/images/LinkIcon.png`}
          size={`20px`}
          marginRight={`0px`}
        />
        <InputTransparent placeholder={`링크를 추가해 보세요`} />
        <GradientButton padding={`10px 16px`}>추가하기</GradientButton>
      </div>
    </>
  );
};

export default AddLinkBar;
