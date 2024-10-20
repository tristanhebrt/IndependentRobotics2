import { useState } from 'react'
import './Home.css'

import Header from "./Header/Header.jsx"

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default Home
