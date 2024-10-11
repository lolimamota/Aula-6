import React from 'react'

// IMPORT DAS IMAGENS

import Mamografia from '../Main/img/mamografia.png';
import Alimentacao from '../Main/img/alimentacao.png';
import Medico from '../Main/img/medico.png';
import Not from '../Main/img/proibido.png';

function DicasMain() {
  return (
    <section className='BgLight'>
        <figure className='Fig03'>
            <img src={Mamografia} alt="Faça mamografia anual a partir dos 40 anos" />
            <img src={Alimentacao} alt="Mantenha uma alimentação saudável" />
            <img src={Medico} alt="Vá ao médico regularmente" />
            <img src={Not} alt="Evite o consumo de bebida alcoolica e tabagismo" />
        </figure>
    </section>
  )
}

export default DicasMain