const IconArea = ({
  backgroundImageUrl,
  size = "16px",
  marginRight = "4px",
}) => {
  return (
    <div
      className="icon-area"
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

export default IconArea;
