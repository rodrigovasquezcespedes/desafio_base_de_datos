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
  const eliminarColaborador = (id) => {
    /* filter crea un nuevo arreglo de los colaboradores que son distintos al id seleccionado */
    const colaboradoresFiltrados = colaboradores.filter(colaborador => colaborador.id !== id)
    setColaboradores(colaboradoresFiltrados)
  }
  const buscarColaboradores = (terminoBusqueda) => {
    /* filter crea un nuevo arreglo de los colaboradores que contengan el caracter marcados */
    const colaboradoresFiltrados = BaseColaboradores.filter(colaborador =>
      /* Object.values(colaborador) crea un array que devuelve los datos del objeto */
      /* some es un método de array que verifica si al menos un elemento cumple con la condición */
      Object.values(colaborador).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(terminoBusqueda.toLowerCase())
      )
    )
    setColaboradores(colaboradoresFiltrados)
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='text-white p-3'>
              <Buscador buscarColaboradores={buscarColaboradores} />
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
