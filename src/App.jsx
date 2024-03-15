import 'bootstrap/dist/css/bootstrap.min.css'
import { BaseColaboradores } from './BaseDatos/BaseColaboradores'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Buscador from './components/Buscador'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='text-white p-3'>
              <Buscador />
            </div>
          </div>
          <div className='col-md-8 col-12'>
            <div className=' text-white p-3'>
              <div className='row'>
                <div className='col'>
                  <Listado colaboradores={colaboradores} />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className='text-white p-3'>
              <div className='container mt-3'>
                <div className='row'>
                  <div className='col-12'>
                    <h3 className='text-dark text-center'>Agregar Colaborador</h3>
                    <Formulario />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
