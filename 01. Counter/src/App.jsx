import { useState } from 'react'
import "./style.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
     <div>
     <h1 className='number'>{count}</h1>
     </div>
    
    <div className="btns-container">
      <button className='increment' onClick={()=>setCount(count+1)}>++</button>
      <button className='increment' onClick={()=>setCount(count-1)}>--</button>
      <button className='increment' onClick={()=>setCount(0)}>restart</button>
     
    </div>
      
    </div>
  )
}

export default App
