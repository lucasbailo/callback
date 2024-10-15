import './App.css'
import Calculator from './components/Calculator'
import Image from './assets/image.png'
import { useCallback } from 'react'

function App() {

  const calculateHypotenuse = useCallback((sideA, sideB) => {
    const powerA = Math.pow(sideA, 2)
    const powerB = Math.pow(sideB, 2)

    return Math.sqrt((powerA + powerB))
  }, [])

  return (
    <>
      <img style={{maxWidth: '500px'}} src={Image} alt="right triangle" />
      <Calculator calculateHypotenuse={calculateHypotenuse} />
    </>
  )
}

export default App
