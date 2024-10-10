import React from 'react'
import Hand from './img/maos.png'
import Run from './img/corrida.png';
import Mamografia from './img/mamografia.png';
import Alimentacao from './img/alimentacao.png';
import Medico from './img/medico.png';
import Not from './img/proibido.png';

function Main() {
  return (
    <>
    <section>
        <p>Outubro Rosa alerta sobre prevenção e diagnóstico precoce do câncer de mama. O mês de Outubro já é conhecido mundialmente como um mês marcado por ações afirmativas relacionadas à prevenção e diagnóstico precoce do câncer de mama. O movimento, conhecido como Outubro Rosa, é celebrado anualmente desde os anos 90.</p>
        <figure>
            <img src={Hand} alt="Imagem de várias mãos segurando laços rosa em forma de um circulo contendo a seguinte frase no meio 'Outubro Rosa, Mês de conscientização ao cancer de mama'" />
        </figure>
    </section>
    <section>
        <figure>
            <img src={Run}
            alt="Varias mulheres vestidas com a camisa cor de rosa simbolizando as cores da campanha em uma corrida" />
        </figure>
        <p>Outubro Rosa promove a conscientização sobre o câncer de mama com corridas e caminhadas. Esses eventos incentivam a prevenção e o diagnóstico precoce, reunindo pessoas em apoio à causa. Participantes vestem rosa e percorrem distâncias variadas.</p>
    </section>
    <section>
        <figure>
            <img src={Mamografia} alt="" />
            <img src={Alimentacao} alt="" />
            <img src={Medico} alt="" />
            <img src={Not} alt="" />
        </figure>
    </section>
    </>
  )
}

export default Main