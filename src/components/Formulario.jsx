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
                  <form>
                    <div className='mb-3'>
                      <input type='text' className='form-control' id='input1' />
                    </div>
                    <div className='mb-3'>
                      <input type='text' className='form-control' id='input2' />
                    </div>
                    <div className='mb-3'>
                      <input type='text' className='form-control' id='input3' />
                    </div>
                    <div className='mb-3'>
                      <input type='text' className='form-control' id='input4' />
                    </div>
                    <div className='mb-3'>
                      <input type='text' className='form-control' id='input5' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Agregar</button>
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
