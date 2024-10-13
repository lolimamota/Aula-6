import React from 'react'
import Logo from './img/Logo CM.png'

import SobreMain from '../Routes/SobreMain.jsx';
import ConsienteMain from '../Routes/ConscienteMain.jsx';
import DicasMain from '../Routes/DicasMain.jsx';

export default function Header() {
  return (
    <header className='HeaderOut'>
        <figure>
        <img src={Logo} alt="Logo com uma pessoa com um laço rosa frente ao corpo indicando o outubro rosa, mês de prevenção ao câncer de mama" />
        <h1>Outubro Rosa</h1>
        </figure>
      <nav>
        <ul>
          <li>
            <a href='../Routes/SobreMain.jsx' target='_blank'>
            Sobre
            </a>
          </li>
          <li>
            <a href='../Routes/ConscienteMain.jsx' target='_blank'>
            Conscientização
            </a>
          </li>
          <li>
            <a href='../Routes/DicasMain.jsx' target='_blank'>
            Dicas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}