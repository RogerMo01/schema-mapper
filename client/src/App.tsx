import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/')
      console.log(response)
      const dataE = await response.json()
      setData(dataE.message)
    }

    fetchData()
  }, [])
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Data:</h1>
      <div>
        {data}
      </div>
    </>
  )
}

export default App
