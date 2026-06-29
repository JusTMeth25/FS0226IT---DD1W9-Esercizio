const Button = function (props) {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;