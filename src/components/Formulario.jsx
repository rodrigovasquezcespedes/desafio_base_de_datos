import Buscador from './Buscador'
import Listado from './Listado'

const Formulario = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='bg-primary text-white p-3'>
            <Buscador />
          </div>
        </div>
        <div className='col-md-8 col-12'>
          <div className='bg-success text-white p-3'>
            <Listado />
          </div>
        </div>
        <div className='col-md-4 col-12'>
          <div className='bg-warning text-white p-3'>
            <div className='container mt-3'>
              <div className='row'>
                <div className='col-12'>
                  <h3>Agregar Colaborador</h3>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formulario
