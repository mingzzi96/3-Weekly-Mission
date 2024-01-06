import "./GradientButton.css";

const GradientButton = ({
  children,
  padding,
  fontSize = "14px",
  fontWeight = "600",
}) => {
  return (
    <>
      <button
        className="gradient-btn"
        style={{
          padding: `${padding}`,
          fontSize: `${fontSize}`,
          fontWeight: `${fontWeight}`,
        }}
      >
        {children}
      </button>
    </>
  );
};

export default GradientButton;
