import React from 'react'

// IMPORT DAS IMAGENS

import Run from '../Main/img/corrida.png';

function ConscienteMain() {
  return (
    <section>
        <figure className='Fig02'>
            <img src={Run}
            alt="Varias mulheres vestidas com a camisa cor de rosa simbolizando as cores da campanha em uma corrida" />
        </figure>
        <p className='ChngColor'>Outubro Rosa promove a conscientização sobre o câncer de mama com corridas e caminhadas. Esses eventos incentivam a prevenção e o diagnóstico precoce, reunindo pessoas em apoio à causa. Participantes vestem rosa e percorrem distâncias variadas.</p>
    </section>
  )
}

export default ConscienteMain