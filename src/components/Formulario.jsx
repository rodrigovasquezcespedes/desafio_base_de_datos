import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Formulario = ({ colaboradores, setColaboradores }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  })

  const handleChange = (e) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [e.target.name]: e.target.value
    })
  }

  const handleSend = (e) => {
    e.preventDefault()
    setColaboradores([...colaboradores, nuevoColaborador])
  }

  return (
    <Form onSubmit={handleSend}>
      <Form.Group className='mb-3' controlId='formBasicNombre'>
        <Form.Control
          type='text'
          placeholder='Nombre del colaborador'
          name='nombre'
          onChange={handleChange}
          value={nuevoColaborador.nombre}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          type='email'
          placeholder='Email del colaborador'
          name='correo'
          onChange={handleChange}
          value={nuevoColaborador.correo}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEdad'>
        <Form.Control
          type='text'
          placeholder='Edad del colaborador'
          name='edad'
          onChange={handleChange}
          value={nuevoColaborador.edad}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicCargo'>
        <Form.Control
          type='text'
          placeholder='Cargo del colaborador'
          name='cargo'
          onChange={handleChange}
          value={nuevoColaborador.cargo}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicTelefono'>
        <Form.Control
          type='text'
          placeholder='Telefono del colaborador'
          name='telefono'
          onChange={handleChange}
          value={nuevoColaborador.telefono}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Agregar Colaborador
      </Button>
    </Form>
  )
}

export default Formulario
