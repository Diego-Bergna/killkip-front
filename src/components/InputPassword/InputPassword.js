import "./InputPassword.css"

function InputPassword(props){
    return (
      <input
        className="inputPassword"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={ props.onChange}
        onKeyUp={ props.onChange}
        onBlur={ props.onChange}
      />
    );
  }

export default InputPassword;