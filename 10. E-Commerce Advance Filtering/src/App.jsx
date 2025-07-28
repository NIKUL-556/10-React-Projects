import { useState } from 'react'
import './App.css'
import Navigation from './Navigation/Nav'
import Products from './products/Products'
import Recommended from './Recommended/Recommended'
import Category from './Sidebar/Category/Category'
import Colors from "./Sidebar/Colors/Colors"
import Price from './Sidebar/Price/Price'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Products/>
      <Recommended/>
      <Category/>
      <Colors/>
      <Price/>

    </>
  )
}

export default App
