import React from 'react'
import './Button.css'

export default props =>{ //Componente funcional sem estado
    let classes = 'button ' /*Gerando as classes a partir da variavel */
    classes += props.operation ? 'operation' : ''/*Se a propriedade for passada será adicionado, se não será vazio*/
    classes += props.double ? 'double': ''
    classes += props.triple ? 'triple' : ''
    return (
        <button
        onClick={e => props.click && props.click(e.target.innerHTML)} //Evento do CLick passando o conteudo do click
        className={classes}>
        {props.label}
    </button>
    )
}
