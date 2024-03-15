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
        {colaboradores.map((colaborador, index) => (
          <tr key={index}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Listado
