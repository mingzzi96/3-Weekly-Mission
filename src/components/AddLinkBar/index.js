import { IconArea } from "@components/Input/InputType";
import { InputTransparent } from "@components/Input/InputType";

export const AddLinkBar = () => {
  return (
    <>
      <div className="AddLinkBar">
        <IconArea backgroundImageUrl={`/assets/images/LinkIcon.png`} />
        <InputTransparent placeholder={`링크를 추가해 보세요`} />
      </div>
    </>
  );
};
