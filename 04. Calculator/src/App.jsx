import { useState } from 'react'
import './App.css'

function App() {
  const [inputvalue, setInputValue] = useState("")

  const clear = ()=> setInputValue("")

  const display =(value)=> {
    setInputValue(inputvalue + value);
  }

  const calculate =() => {
    var answers = eval(inputvalue);
    setInputValue(answers);
  }


  return (
    <>
    <form className='calculator' name='calc'>
      <input type="text" className='value' value={inputvalue}/>
      <span className="num clear" onClick={() => clear()}> c </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}> + </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span class="num equal" onClick={() => calculate()}>= </span>
    </form>
  
    </>
  )
}

export default App
