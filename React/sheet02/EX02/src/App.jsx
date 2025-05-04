import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nombreForm, setNombreForm] = useState("")
  const [emailForm, setEmailForm] = useState("")
  const [contrasenaForm, setContrasenaForm] = useState("")
  return (
    <>
    <form name='login'>
      <legend>ingresa info</legend>
      <label>nombre:  <input value={nombreForm} onChange={e => setNombreForm(e.target.value)} type='text' name="Nombre"></input></label>
      <br />
      <label>email:   <input value={emailForm} onChange={e => setEmailForm(e.target.value)} type='text' name="email"></input></label>
      <br />
      <label>contraseña:<input value={contrasenaForm} onChange={e => setContrasenaForm(e.target.value)} type='text' name="contrasena"></input></label>
      <br />
      <button type='submit'
      
      
      >sent</button>
    </form>
    {nombreForm !="" &&
    <p>{nombreForm}</p>}
    {emailForm !="" &&
    <p>{emailForm}</p>}
    {contrasenaForm !="" &&
    <p>{contrasenaForm}</p>}
    </>
  )
}

export default App
