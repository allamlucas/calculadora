import './App.css';

import Boton from './componentes/Boton.js'
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import CalculadoraLogo from './imagenes/calculadoraLogo.png'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    console.log(input.length)
   console.log(val)

    if (
      ((input.length === 0) && 
         (val === '+' ||
         val === '-' ||
         val === '*' ||
         val === '/'
     )) ||
      ((
      val === '+' ||
      val === '-' ||
      val === '*' ||
      val === '/') &&
      (input[input.length - 1] === '+' ||
      input[input.length - 1] === '-' ||
      input[input.length - 1] === '*' ||
      input[input.length - 1] === '/'))) {
     
  

      }
    else {
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else
      alert('Por favor ingrese algun número')
  }

  return (
    <div className='App'>
      <div className='calculadora-logo-contenedor'>
        <img
          src={CalculadoraLogo}
          className='calculadora-logo'
          alt='Logo de calculadora'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>
            =
          </Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
