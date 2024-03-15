import Table from 'react-bootstrap/Table'

const Listado = ({ colaboradores }) => {
  return (
    <Table striped bordered hover>
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
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Listado
