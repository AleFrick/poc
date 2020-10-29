import React, { useState } from 'react'
import api from '../../api';
import Button from '../Button/Button'
import { ToastContainer, toast } from 'react-toastify'; 
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
                    notificacao('Achou', 'success')
                }else{
                    notificacao('Não achou', 'warn')
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

    function notificacao(message, type){        
        if(message.trim !== ''){
            switch (type) {
                case 'success':
                    toast.success(message);
                    break;
                case 'warn':
                    toast.warn(message);
                    break;
                case 'error':
                    toast.error(message);
                    break;
                default:
                    toast.info(message);
            }
        }
    }    
    return(
        <div>
            <div className='CamposBusca'>
            <h1>{props.descricao}</h1>
            <Edit label='Nome'  descricao={descricao} valor={descricao} change={ e => setDescricao(e.target.value)} />    
            <Button name="Buscar"  color="primary" click={e => VerificarNome(descricao)}/>    
            <Button name="Cancelar" color="danger"  click={ e => Cancelar()} />                                                  
            </div> 
            <div className='CampoResultado'>
                
            </div>                      
            <ToastContainer />            
        </div>          
    )
}


