import "./Button.scss"

const Button = ({text,txtColor}) => {
  return (
      <button  style={{color: txtColor}}>{ text}</button>
  )
}
export default Button;
