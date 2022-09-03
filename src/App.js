// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.


import { useState } from 'react';
import Listado from "../Listado";
import Cabecera from "../Cabecera";


function App() {
  const [cantidad, setContador] = useState(0)
  
  const incrementarCantidad =  () => {
      setContador(cantidad+1);
  };
 
  return (
    
      <div className="App">
      <Cabecera contador={cantidad}/>
      <Listado incrementarCantidad={incrementarCantidad} />
    </div>
       
  );
  


}

export default App;
