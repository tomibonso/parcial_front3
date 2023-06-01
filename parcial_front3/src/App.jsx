import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  const [musica, setMusica] = useState({
    nombre: '',
    cancion: ''
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) =>{
        event.preventDefault()
        if(musica.nombre.length > 3 && musica.cancion.length > 6){
            setShow(true)
            setError(false)
        }else{
            setError(true)
        }
  }
  return (
    <>
      <div className='estiloForm'>
        <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input type="text" disabled={show} onChange={(e) => setMusica((prevMusica) => ({...prevMusica, nombre: e.target.value}))}/>
            <label>Cancion favorita:</label>
            <input type="text" disabled={show} onChange={(e) => setMusica((prevMusica) => ({...prevMusica, cancion: e.target.value}))}/>
            <button>Submit</button>
            {error && 'Por favor chequea que la información sea correcta'}
        </form>
        {show ? 
        <>
            <Card musica={musica}/>
        </>
        :
        null
        }
      </div>
    </>
  )
}

export default App
