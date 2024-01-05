export const IconArea = ({ backgroundImageUrl, size = "16px" }) => {
  return (
    <div
      className="IconArea"
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
      }}
    ></div>
  );
};

export const InputTransparent = ({ placeholder, style }) => {
  return <input placeholder={placeholder} style={style} />;
};
