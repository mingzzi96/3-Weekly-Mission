import "./GradientButton.css";

const GradientButton = ({
  children,
  padding,
  fontSize = "14px",
  fontWeight = "600",
  minWidth = "undefined",
}) => {
  return (
    <>
      <button
        className="gradient-btn"
        style={{
          padding: `${padding}`,
          fontSize: `${fontSize}`,
          fontWeight: `${fontWeight}`,
          minWidth: `${minWidth}`,
        }}
      >
        {children}
      </button>
    </>
  );
};

export default GradientButton;
