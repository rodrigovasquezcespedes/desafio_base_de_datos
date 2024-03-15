const Formulario = () => {
  return (
    <form>
      <div className='mb-3'>
        <input type='text' className='form-control' placeholder='Nombre del Colaborador' />
      </div>
      <div className='mb-3'>
        <input type='text' className='form-control' placeholder='Email del Colaborador' />
      </div>
      <div className='mb-3'>
        <input type='text' className='form-control' placeholder='Edad del Colaborador' />
      </div>
      <div className='mb-3'>
        <input type='text' className='form-control' placeholder='Cargo del Colaborador' />
      </div>
      <div className='mb-3'>
        <input type='text' className='form-control' placeholder='Telefono del Colaborador' />
      </div>
      <div class='d-flex justify-content-center'>
        <button type='submit' className='btn btn-primary'>Agregar Colaborador</button>
      </div>
    </form>
  )
}

export default Formulario
