import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setData(res.data.meals))
      .catch((err) => console.log(err))

  }, [])


  return (
    <>
      {
        data.map((item,idx) => (
          <section className="card" key={idx}>
            <img src={item.strMealThumb} />
            <section className="content">
              <p>{item.strMeal}</p>
              <p>#{item.idMeal}</p>
            </section>
          </section>
        ))
      }

    </>
  )
}

export default App
