import Table from 'react-bootstrap/Table'

const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (// map permite iterar sobre cada elemento del arreglo
          <tr key={colaborador.id}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td><button type='button' class='btn btn-danger btn-sm' onClick={() => eliminarColaborador(colaborador.id)}>Borrar</button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Listado
