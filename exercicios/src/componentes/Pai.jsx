import React from  'react'
// import Filho from './Filho'
import { childrenWithProps } from '../Utils/Util' //Importando Função


export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)} {/* Vai Passar os componentes do pais para os filhos */}
        </ul>
    </div>
