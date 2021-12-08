import "./style.css";
const Button = ({ img, title, backgroundColor, color }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: backgroundColor ? backgroundColor : "#fff",
          color: color ? color : "000",
        }}
      >
        <img src={img} />
        <span>{title}</span>
      </button>
    </div>
  );
};
export default Button;
