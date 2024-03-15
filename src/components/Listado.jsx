const Listado = () => {
  return (
    <div className='row'>
      <div className='col'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Nombre</th>
              <th scope='col'>Correo</th>
              <th scope='col'>Edad</th>
              <th scope='col'>Cargo</th>
              <th scope='col'>Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Dato 1</td>
              <td>Dato 2</td>
              <td>Dato 3</td>
              <td>Dato 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Listado
