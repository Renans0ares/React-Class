import React from 'react'
import ReactDOM from 'react-dom'

        //Posso colocar qualquer nome, sendo com letra maiuscula
// import Primeiro from './componentes/Primeiro'

// import BomDia from './componentes/BomDia'

import { BoaTarde, BoaNoite } from './componentes/Multiplos'

// const elemento = <h1>React 3</h1>
// ReactDOM.render(<BomDia nome="Renan" />, document.getElementById('root'))

ReactDOM.render(
        <div>
                <BoaTarde nome="Renan" />
                <BoaNoite nome="Carlos" />
        </div>
, document.getElementById('root'))
