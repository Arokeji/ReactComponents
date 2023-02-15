import './App.css';
import Telefonos from './components/Telefonos/Telefonos';
import Mensaje from './components/Mensaje/Mensaje';
import BotonCustom from './components/BotonCustom/BotonCustom';

function App() {
  
  const showPush = () => {
    alert("Le has dado");
  }

  const showOk = () => {
    alert("Pues ok tio...");
  }
  
  return (
    <div className="App">
      
      <h1>Telefonos:</h1>
      <ul>
          <Telefonos></Telefonos>
      </ul>

      <h1>Mensajes:</h1>
      <Mensaje name="Laura"></Mensaje>
      <Mensaje name="Edu"></Mensaje>

      <h1>Botones:</h1>
      <BotonCustom handleClick={showPush} text="Dale!"></BotonCustom>
      <BotonCustom handleClick={showOk} text="Ok"></BotonCustom>

    </div>
  );
}

export default App;
