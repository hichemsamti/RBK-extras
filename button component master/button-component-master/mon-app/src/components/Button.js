import "../css/ButtonCss.css";
const Button = ({ style, ...props }) => {
  return (
    <div className="box">
      <span className={props.labelClass}>{props.labelContent}</span>
      <button
        disabled={props.disabled}
        className={props.btnClass}
        style={style}
      >
        {props.iconStart}
        {props.content}
        {props.iconEnd}
      </button>
    </div>
  );
};

export default Button;