import Buscador from './Buscador'
import Listado from './Listado'

const Formulario = () => {
  return (
    <div class='container'>
      <div class='row'>
        <div class='col-12'>
          <div class='bg-primary text-white p-3'>
            <Buscador />
          </div>
        </div>
        <div class='col-8'>
          <div class='bg-success text-white p-3'>
            <Listado />
          </div>
        </div>
        <div className='col-4'>
          <div className='bg-warning text-white p-3'>
            <div className='container mt-3'>
              <div className='row'>
                <div className='col-md-6'>
                  <form>
                    <div className='mb-3'>
                      <input type='text' className='form-control' id='input1' />
                    </div>
                    <div className='mb-3'>
                      <input type='tex' className='form-control' id='input2' />
                    </div>
                    <div className='mb-3'>
                      <input type='text' className='form-control' id='input3' />
                    </div>
                    <div class='mb-3'>
                      <input type='text' className='form-control' id='input4' />
                    </div>
                    <div class='mb-3'>
                      <input type='text' className='form-control' id='input5' />
                    </div>
                    <button type='submit' class='btn btn-primary'>Agregar</button>
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
