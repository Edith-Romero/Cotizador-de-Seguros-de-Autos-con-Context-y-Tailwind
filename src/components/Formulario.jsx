import { Fragment } from 'react';
import {MARCAS,YEARS, PLANES} from '../constants'

const Formulario = () => {
  return (
    <>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">MARCA</label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200">
            <option value = "">---Seleccione una Marca---</option>           
            {/* Itera el arreglo con el .map y me coloca las opciones como dinamicas */}
            {MARCAS.map(marca =>(
              <option
                key={marca.id}
                value={marca.id}
              >{marca.nombre}</option>
                ))}0
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            MARCA
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200">
            <option value = "">---Seleccione el Año---</option>
            
            {YEARS.map(year=>(
              <option
                key={year}
                value={year}
              >{year}</option>
                ))}

          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige el plan
          </label>
            <div className='flex gap-3 items-center'>
            {PLANES.map(plan=>(
                <Fragment key={plan.id}>
                  <label>{plan.nombre}</label>
                  <input
                    type= "radio"
                    name="plan"
                    value={plan.id}
                  />
                </Fragment>
                ))}
            </div>
        </div>

        <input
          type="submit"
          value="Cotizar"
          className='w-full bg-indigo-500 hover:bg--indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-md'
        />
      </form>
    </>
  );
};

export default Formulario;
