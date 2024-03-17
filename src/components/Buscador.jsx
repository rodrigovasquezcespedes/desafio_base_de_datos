const Buscador = ({ buscarColaboradores }) => {
  return (

    <input type='text' onChange={buscarColaboradores} placeholder='Buscar Colaboradores' />
  )
}

export default Buscador
