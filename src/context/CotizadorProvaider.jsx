// 1.- Se importa el hooks
import { useState, createContext } from "react";
import {
    obtenerDiferenciaYear,
    calcularMarca,
    calcularPlan,
    formatearDinero,
} from "../helpers";

// 2.- Se guarda en una variable

const CotizadorContext = createContext();

// 4.- Se pasa un children que seran los componentes hijos
// del provaider es de donde salen los datos
const CotizadorProvaider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    });

    const [error, setError] = useState("");
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    const cotizadorSeguro = () => {
        // Una base

        let resultado = 2000;

        // Obtener diferencia de anios

        const diferencia = obtenerDiferenciaYear(datos.year);

        // Hay que restar el 3%

        resultado -= (diferencia * 3 * resultado) / 100;

        // Europeo 30%
        // Americano 15%
        // Asiatico 5%
        resultado *= calcularMarca(datos.marca);

        // Basico 20%
        // Completo 50%

        resultado *= calcularPlan(datos.plan);

        //Formatear a Dinero
        resultado = formatearDinero(resultado);

        setCargando(true);

        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 3000);
    };

    return (
        //3.- Se pasa como un componente con la anotacion de provaider
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizadorSeguro,
                resultado,
                cargando,
            }}
        >
            {children}
        </CotizadorContext.Provider>
    );
};
//5.- Aca se exporta por default la variable y se exporta normal la funcion tipo componente
export { CotizadorProvaider };

export default CotizadorContext;
