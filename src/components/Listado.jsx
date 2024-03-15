const Listado = () => {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Primera</th>
              <th scope='col'>Segunda</th>
              <th scope='col'>Tercera</th>
              <th scope='col'>Cuarta</th>
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
