import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//IMPORT DAS PÁGINAS

import SobreMain from './SobreMain.jsx';
import ConscienteMain from './ConscienteMain.jsx';
import DicasMain from './DicasMain.jsx';

export default function Router() {
    return (
        <BrowserRouter>
            <nav className='routeNav'>
                <ul className='routeUl'>
                    <li className='routeLi'><Link to='/sobre'>Sobre</Link></li>
                    <li className='routeLi'><Link to='/conscientizacao'>Conscientização</Link></li>
                    <li className='routeLi'><Link to='/dicas'>Dicas</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/sobre' element={<SobreMain/>}/>
                <Route path='/conscientizacao' element={<ConscienteMain/>}/>
                <Route path='/dicas' element={<DicasMain/>}/>
            </Routes>
        </BrowserRouter>
    )
}