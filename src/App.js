import UsuarioEntrada from './components/UsuarioEntrada';
import UsuarioSaida from './components/UsuarioSaida';
import {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  const changeName = (event) => {
    setName(event.target.value);
  }

  return (
    <>
    <UsuarioEntrada funcao = {changeName}/>
    <UsuarioSaida value={'Pedro'}/>
    <UsuarioSaida value={name}/>
    </>
  );
}

export default App;
