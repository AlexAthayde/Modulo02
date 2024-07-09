import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Produto from './components/Produto'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>

      <Produto></Produto>

      <Footer></Footer>
    </>
  )
}

export default App
