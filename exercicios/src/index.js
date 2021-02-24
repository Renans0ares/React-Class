import React from 'react'
import ReactDOM from 'react-dom'

//Posso colocar qualquer nome, sendo com letra maiuscula
// import Primeiro from './componentes/Primeiro'


import Saudacao from './componentes/Saudacao'

ReactDOM.render(
        <div>
                <Saudacao tipo="Bom dia" nome="João"/>
        </div>
, document.getElementById('root'))



// import { BoaTarde, BoaNoite } from './componentes/Multiplos'

// ReactDOM.render(
//         <div>
//                 <BoaTarde nome="Renan" />
//                 <BoaNoite nome="Carlos" />
//         </div>
// , document.getElementById('root'))



// import BomDia from './componentes/BomDia'

// const elemento = <h1>React 3</h1>
// ReactDOM.render(<BomDia nome="Renan" />, document.getElementById('root'))

