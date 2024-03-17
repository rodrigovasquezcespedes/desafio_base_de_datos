import { useState } from 'react'

const Buscador = ({ buscarColaboradores }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')

  const handleChange = (event) => {
    setTerminoBusqueda(event.target.value)
    buscarColaboradores(event.target.value)
  }

  return (
    <input type='text' placeholder='Buscar colaborador' value={terminoBusqueda} onChange={handleChange} />
  )
}
export default Buscador
