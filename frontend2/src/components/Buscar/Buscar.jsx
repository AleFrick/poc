import React, { useState } from 'react'
import api from '../../api';
import Button from '../Button/Button'
import Edit from '../Edit/Edit'

import './Buscar.css'


export default function Buscar(props){
    const [descricao, setDescricao] = useState('');
    const [existe, setExiste] = useState('');

    async function VerificarNome(){
        if(descricao.trim() !== ''){
            api.get(`/verificanome/` + descricao)
            .then(function(response){
                if(response.data){
                    setExiste('Achou')
                }else{
                    setExiste('Não Achou')
                }
                
            })
            .catch(function(error){
                console.log(error)
            })       
        }
    }

    function Cancelar(){
        setDescricao('')
        setExiste('')
    }    

    return(
        <div>
            <div className='CamposBusca'>
            <h1>{props.descricao}</h1>
            <Edit label='Nome'  descricao={descricao} valor={descricao} change={ e => setDescricao(e.target.value)} />    
            <Button name="Buscar"  click={e => VerificarNome(descricao)}/>    
            <Button name="Cancelar"  click={ e => Cancelar()} />                                                  
            </div> 
            <div className='CampoResultado'>
                <h3>
                    {existe}
                </h3>
            </div>
            
            
            
        </div>          
    )
}


