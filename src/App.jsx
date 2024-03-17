import 'bootstrap/dist/css/bootstrap.min.css'
import { BaseColaboradores } from './BaseDatos/BaseColaboradores'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Buscador from './components/Buscador'
import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({ msg: '', color: '' })
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState([])

  const eliminarColaborador = (id) => {
    const colaboradoresFiltrados = colaboradores.filter(colaborador => colaborador.id !== id)
    setColaboradores(colaboradoresFiltrados)
  }

  const buscarColaboradores = (filtro) => {
    if (filtro.trim() === '') {
      setColaboradoresFiltrados([])
    } else {
      const colaboradoresFiltrados = colaboradores.filter(colaborador =>
        Object.values(colaborador).some(valor =>
          typeof valor === 'string' && valor.toLowerCase().includes(filtro.toLowerCase())
        )
      )
      setColaboradoresFiltrados(colaboradoresFiltrados)
    }
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='text-center'>Listado de colaboradores</h1>
            <h3 className='text-center text-dark'>Proyecto grupal Romina Osorio y Rodrigo Vasquez</h3>
            <div className='text-white p-3'>
              <Buscador buscarColaboradores={buscarColaboradores} />
            </div>
          </div>
          <div className='col-md-8 col-12'>
            <div className=' text-white p-3'>
              <div className='row'>
                <div className='col'>
                  <Listado colaboradores={colaboradoresFiltrados.length > 0 ? colaboradoresFiltrados : colaboradores} eliminarColaborador={eliminarColaborador} />
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
                    <div className='p-2'>
                      {alert.msg !== '' && <Alert msg={alert.msg} color={alert.color} />}
                    </div>
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
