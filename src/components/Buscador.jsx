const Buscador = ({ colaboradores, setColaboradores }) => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredColaboradores = colaboradores.filter(colaborador =>
      Object.values(colaborador).some(val =>
        val.toString().toLowerCase().includes(searchTerm)
      )
    )
    setColaboradores(filteredColaboradores)
  }

  return (
    <input type='text' placeholder='Buscar colaborador' onChange={handleSearch} />
  )
}
export default Buscador
