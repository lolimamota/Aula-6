import React from 'react';
import Logo from './img/Logo CM.png';


export default function Header() {
  return (
    <header className='HeaderOut'>
      <figure>
        <img src={Logo} alt="Logo com uma pessoa com um laço rosa frente ao corpo indicando o outubro rosa, mês de prevenção ao câncer de mama" />
        <h1>Outubro Rosa</h1>
      </figure>
      <nav>
        <ul>
          <li>Sobre</li>
          <li>Conscientização</li>
          <li>Dicas</li>
        </ul>
      </nav>
    </header>
  )
}