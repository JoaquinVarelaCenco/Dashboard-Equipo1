import "./Button.css";

const Button = (props) => {
  return (
    <button className={props.classN} type={props.type} onClick={props.click} ref={props.reference}>
      {props.title}
      {props.children}
    </button>
  );
};

export default Button;
