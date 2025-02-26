import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bai01 from './components/Bai01'
import MyButton from './components/MyButton'
function App() {

  return (
    <>
        <div className='myApp'>
        <Bai01></Bai01>
        <MyButton></MyButton>
        </div>
    </>
  )
}

export default App
