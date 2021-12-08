import "../text/style.css";
const Text = ({ title, color, fontsize }) => {
  console.log(fontsize);
  return (
    <h1
      style={{
        fontSize: `${fontsize}px`,
        color: color ? color : "000",
      }}
    >
      {title}
    </h1>
  );
};
export default Text;
