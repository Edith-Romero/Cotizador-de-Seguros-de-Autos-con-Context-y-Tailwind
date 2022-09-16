// En este componente creamos un hoks que ahorra que en cada componente se importe el useContext y el Context que se creo
// con este solo se llamaria al hooks y me ahorro codigo

import {useContext} from 'react'
import CotizadorContext from '../context/CotizadorProvaider'

const useCotizador = () => {
  return useContext(CotizadorContext)
}

export default useCotizador
