import IconArea from "@components/IconArea/IconArea";
import GradientButton from "@components/GradientButton/GradientButton";
import "./AddLinkBar.css";

const AddLinkBar = () => {
  return (
    <>
      <div className="add-link-bar">
        <IconArea
          backgroundImageUrl={`/assets/images/icons/LinkIcon.png`}
          size={`20px`}
          marginRight={`0px`}
        />
        <input placeholder="링크를 추가해 보세요" />
        <GradientButton padding={`10px 16px`}>추가하기</GradientButton>
      </div>
    </>
  );
};

export default AddLinkBar;
