import React, { Fragment } from 'react'
                //Propriedades passadas como parâmetro
export default props => [ //Como Array, porém, é necessário usar as Keys
        <h1 key='h1'>Bom dia {props.nome}</h1>,
        <h2 key='h2'>Até mais com Array!!</h2>    
]

//Com React

// export default props => 
// <Fragment> //Caso não queira envolver os componentes
//     <h1>Bom dia {props.nome}</h1>
//     <h2>Até mais!!</h2>
// </Fragment>

//Or

// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Até logo {props.nome}</h2>
//     </div>