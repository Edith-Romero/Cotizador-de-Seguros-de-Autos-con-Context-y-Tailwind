import useCotizador from "../hooks/useCotizador";
import { useCallback, useMemo, useRef } from "react";
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {
    const { resultado, datos } = useCotizador();

    const { marca, plan, year } = datos

    // Para filtar la marca, se le hace un arraydestructuring para que traiga el objeto de una vez, asi tambien nombreMarca[0]
    // const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [resultado])
    // const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)), [resultado])

    //Aca podia usar el useMemo de la siguiente manera de igual forma trae el mismo resultado
    const [nombreMarca] = useMemo(() => MARCAS.filter(m => m.id === Number(marca)), [resultado])
    const [nombrePlan] = useMemo(() => PLANES.filter(p => p.id === Number(plan)), [resultado])

    //useRef: Devuelve un objecto Ref mutable, pero el este caso no lo hace directamente pero aca devuelve un objeto fijo no cambia
    //no se usa la misma funcion de useCallback porque no ejecuta un funcion interna.
    const yearRef = useRef(year)

    if (resultado === 0) return null;

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>
            <p className="my-2">
                <span className="font-bold ">Marca:</span>
                {nombreMarca.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold ">Plan:</span>
                {nombrePlan.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold ">Año del Auto:</span>
                {yearRef.current}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold ">Total Cotizacion:</span>
                {resultado}
            </p>
        </div>
    )
};

export default Resultado;
