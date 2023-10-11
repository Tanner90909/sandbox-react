// MyButton declaration
export default function MyButton({clickHandler, buttonText}){
    return (
      <button onClick={clickHandler}>{buttonText}</button>
    )
  }
