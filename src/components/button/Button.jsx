import "./Button.scss"

const Button = ({text,txtColor,className}) => {
  return (
      <button  style={{color: txtColor} } className={className}>{ text}</button>
  )
}
export default Button;
