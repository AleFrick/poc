import React, { Component } from 'react'
import Button from '../Button/Button'
import Edit from '../Edit/Edit'


export default class Buscar extends Component {
    constructor(props){
        super(props)
        this.state = { descricao:'', ID_ALUNO:'1231' }

        this.teste = this.teste.bind(this);
        this.teste2 = this.teste2.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({descricao: event.target.value})
    }

    teste(){
        alert(this.state.descricao)
    }

    teste2(){
        alert(this.state.ID_ALUNO)
    }
    

    render() {
        return(
            <div>
                <h1>Buscar Dados</h1>
                <Edit descricao={this.state.descricao} change={this.handleChange} />    
                <Button descricao="Busca" click={this.teste} />    
                <Button descricao="Cancelar" click={this.teste2} />                                      
            </div>
        )
    }
}