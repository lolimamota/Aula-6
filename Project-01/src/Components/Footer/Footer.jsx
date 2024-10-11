import React from 'react'

import LinkedIn from './img/lkd.png';
import Instagram from './img/inst.png';
import Github from './img/git.png';
import Laco from './img/laço.png';

export default function Footer() {
  return (
    <footer>
        <figure>
            <img src={LinkedIn} alt="logo do Linkedin" />
            <img src={Instagram} alt="logo do Instagram" />
            <img src={Github} alt="logo do Github" />
        </figure>
        <h3>Lorrayne Lima Mota</h3>
        <h3>Vinicius Bispo</h3>
        <h3>Marina Gomes</h3>
        <h3>Layout criado para fins de estudos na escola vai na web</h3>
        <figure>
            <img src={Laco} alt="Laço de fita rosa representando o mês da prevenção ao câncer de mama" />
        </figure>
    </footer>
  )
}