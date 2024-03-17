import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Formulario = ({ colaboradores, setColaboradores }) => {
  const [nombreNuevoColaborador, setNombre] = useState('')
  const [correoNuevoColaborador, setCorreo] = useState('')
  const [edadNuevoColaborador, setEdad] = useState('')
  const [cargoNuevoColaborador, setCargo] = useState('')
  const [telefonoNuevoColaborador, setTelefono] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
  
  }





  return (
    <Form onSubmit={handleSend}>
      <Form.Group className='mb-3' controlId='formBasicNombre'>
        <Form.Control
          type='text'
          placeholder='Nombre del colaborador'
          name='nombre'
          onChange={(e) => setNombre(e.target.value)}
          value={nombreNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          type='email'
          placeholder='Email del colaborador'
          name='correo'
          onChange={(e) => setCorreo(e.target.value)}
          value={correoNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEdad'>
        <Form.Control
          type='text'
          placeholder='Edad del colaborador'
          name='edad'
          onChange={(e) => setEdad(e.target.value)}
          value={edadNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicCargo'>
        <Form.Control
          type='text'
          placeholder='Cargo del colaborador'
          name='cargo'
          onChange={(e) => setCargo(e.target.value)}
          value={cargoNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicTelefono'>
        <Form.Control
          type='text'
          placeholder='Telefono del colaborador'
          name='telefono'
          onChange={(e) => setTelefono(e.target.value)}
          value={telefonoNuevoColaborador}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Agregar Colaborador
      </Button>
    </Form>
  )
}

export default Formulario
