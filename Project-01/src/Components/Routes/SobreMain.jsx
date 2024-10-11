import React from "react";

//IMPORT DAS IMAGENS
import Hand from '../Main/img/maos.png'

export default function Sobre(){
    return(
        <section className='BgLight'>
        <p className='BgLight'>Outubro Rosa alerta sobre prevenção e diagnóstico precoce do câncer de mama. O mês de Outubro já é conhecido mundialmente como um mês marcado por ações afirmativas relacionadas à prevenção e diagnóstico precoce do câncer de mama. O movimento, conhecido como Outubro Rosa, é celebrado anualmente desde os anos 90.</p>
        <figure className='Fig01'>
            <img src={Hand} alt="Imagem de várias mãos segurando laços rosa em forma de um circulo contendo a seguinte frase no meio 'Outubro Rosa, Mês de conscientização ao cancer de mama'" />
        </figure>
    </section>
    )
}