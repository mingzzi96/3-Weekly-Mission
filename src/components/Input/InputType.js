export const IconArea = ({
  backgroundImageUrl,
  size = "16px",
  marginRight = "4px",
}) => {
  return (
    <div
      className="IconArea"
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: `contain`,
        backgroundRepeat: `no-repeat`,
        marginRight: `${marginRight}`,
      }}
    ></div>
  );
};

export const InputTransparent = ({ placeholder }) => {
  return <input placeholder={placeholder} />;
};
