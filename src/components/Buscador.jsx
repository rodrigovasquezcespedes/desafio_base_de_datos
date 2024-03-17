const Buscador = ({ onSearch }) => {
  return (

    <input type='text' placeholder='Buscar Colaborador' onChange={(e) => onSearch(e.target.value)} />

  )
}

export default Buscador
