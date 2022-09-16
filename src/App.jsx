import AppSeguros from "./components/AppSeguros";
import {CotizadorProvaider} from './context/CotizadorProvaider'

function App() {
  return (
    <CotizadorProvaider>
      <AppSeguros/>
    </CotizadorProvaider>

  )
}

export default App;
