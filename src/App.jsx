import 'bootstrap/dist/css/bootstrap.min.css'
import { BaseColaboradores } from './BaseDatos/BaseColaboradores'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Buscador from './components/Buscador'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({ msg: '', color: '' })
  const eliminarColaborador = (id) => {
    const colaboradoresFiltrados = colaboradores.filter(colaborador => colaborador.id !== id)
    setColaboradores(colaboradoresFiltrados)
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='text-white p-3'>
              <Buscador colaboradores={colaboradores} setColaboradores={setColaboradores} />
            </div>
          </div>
          <div className='col-md-8 col-12'>
            <div className=' text-white p-3'>
              <div className='row'>
                <div className='col'>
                  <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
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
                    <Formulario setAlert={setAlert} colaboradores={colaboradores} setColaboradores={setColaboradores} />
                    {alert.msg !== '' && <Alert msg={alert.msg} color={alert.color} />}
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
