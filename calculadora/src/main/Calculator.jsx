import React, { Component } from 'react' //Usando Componente de classe
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = { //Estado Inicial
    displayValue: '0', //Valor que começará a ser exibido na calculadora
    clearDisplay:false, 
    operation: null,
    values: [0,0], //Valor da primeira operação e da segunda
    current: 0 //Identificar se está manipulando o primeiro valor ou segundo
}

export default class Calculator extends Component {

    state = {...initialState} //Clone do obj e atribuido ao state

    constructor(props){
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)

    }

    clearMemory(){
        this.setState({...initialState})
    }

    setOperation(operation) {
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true})
        }else{
            const equals = operation === '='
            const currentOperantion = this.state.operation

            const values = [...this.state.values]
            try{
                values[0] = eval(`${values[0]} ${currentOperantion} ${values[1]}`)
            } catch(e){
                values[0] = this.state.values[0]
            }
            values[1] =  0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        if(n == '.' && this.state.displayValue.includes('.')){ //Regra para evitar a ter 2 pontos na API
            return 
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay //Precisa limpar? Apenas se estiver com 0 ou se a var for true
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if(n !== '.'){
            const i = this.state.current // Recebendo primeiro valor selecionado da calculadora
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values] //Clonando o Array para "values"
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render(){ //Para renderizar a calculadora
        return ( //Necessário um return para todo render
            <div className="calculator"> {/* Refencia de class Jsx é className para não dar erros*/}
                <Display value={this.state.displayValue} />               
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}
