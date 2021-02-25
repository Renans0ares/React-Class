import React, { Component } from  'react'

//Exportar por padrão a classe Saudacao
export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    setTipo(e) {
        this.setState({ tipo: e.target.value }) 
    }

    setNome(e){
        this.setState({ nome: e.target.value })
    }

    //Resposável por renderizar o componente
    render() {
        const { tipo, nome } = this.state //Uso this.props para acessar a propriedades do objeto atual
        return ( //Entre parentes jás a expressão
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="nome"  value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}
