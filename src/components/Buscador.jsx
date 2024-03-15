const Buscador = ({ colaboradores, setColaboradores }) => {
  const buscar = (e) => {
    const terminos = e.target.value.toLowerCase()
    // Verifica si el término de búsqueda está vacío
    if (terminos === ' ') {
      // Si está vacío, establece la lista completa de colaboradores
      setColaboradores(colaboradores)
    } else {
      // Si no está vacío, filtra los colaboradores como antes
      const filtrarColaboradores = colaboradores.filter(colaborador =>
        Object.values(colaborador).some(value =>
          value.toString().toLowerCase().includes(terminos)
        )
      )
      setColaboradores(filtrarColaboradores)
    }
  }

  return (
    <input type='text' placeholder='Buscar colaborador' onChange={buscar} />
  )
}

export default Buscador
