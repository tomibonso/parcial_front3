import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  const [cumple, setCumple] = useState({
      nombre: '',
      dia: null
    })

  return (
    <>
      <div className='App'>
        <h1>Carga de estudiantes</h1>
        <form></form>
        <Card cumple={cumple}/>
      </div>
    </>
  )
}

export default App
