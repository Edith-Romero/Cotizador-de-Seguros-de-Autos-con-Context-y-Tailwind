// 1.- Se importa el hooks
import {useState, createContext} from 'react'

// 2.- Se guarda en una variable

const CotizadorContext = createContext();

// 4.- Se pasa un children que seran los componentes hijos
// del provaider es de donde salen los datos
const CotizadorProvaider = ({children}) => {

    const [datos, setDatos] = useState({
        marca:"",
        year:"",
        plan:""
    })

    const handleChangeDatos = e =>{
        setDatos ({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

  return (
    //3.- Se pasa como un componente con la anotacion de provaider
    <CotizadorContext.Provider
        value= {{
            datos,
            handleChangeDatos
        }}
    >
        {children}
    </CotizadorContext.Provider>
  )
}
//5.- Aca se exporta por default la variable y se exporta normal la funcion tipo componente
export{
    CotizadorProvaider
}

export default CotizadorContext;
