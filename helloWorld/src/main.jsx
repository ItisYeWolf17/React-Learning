import React from 'react'
import { createRoot as ReactDOM} from 'react-dom/client' 
import { App } from './App';
import './assets/index.css'

const root = ReactDOM(document.getElementById('root'));

root.render(
  <App />
)

/*const createButton = ({text}) => {//Parametro nombrado va entre llaves {nombre parametro}
return (
  <button>{text}</button>
)
}
//Componentes utilizan PascalCase en React xq no distingue si es un elemento html o si es un componente
const SpecialButton = ({text}) => {
  return (
    <button>{text}</button>
  )
}



root.render(
  //Se pasa el parametro nombrandolo
  <React.Fragment>
    {createButton({text: 'Hola Mundo!'})}
    <br></br> 
    <SpecialButton text = "Boton de Componente"/>
  </React.Fragment>
)*/