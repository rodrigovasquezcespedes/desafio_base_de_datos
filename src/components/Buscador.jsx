import { useState } from 'react'

const Buscador = ({ buscarColaboradores }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')

  /*
  (event.target.value) extrae el valor del campo de entrada y lo usa para hacer la busqueda
  buscarColaboradores(event.target.value)llamar a la función buscarColaboradores pasada como prop,pasando el valor del input */
  const handleChange = (event) => {
    setTerminoBusqueda(event.target.value)
    buscarColaboradores(event.target.value)
  }

  return (
    <input type='text' placeholder='Buscar colaborador' value={terminoBusqueda} onChange={handleChange} />
  )
}
export default Buscador
