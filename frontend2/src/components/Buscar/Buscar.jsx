import React, { useState } from 'react'
import api from '../../api';
import Button from '../Button/Button'
import { ToastContainer, toast } from 'react-toastify'; 
import Edit from '../Edit/Edit'
import Grid from '../Grid/Grid'

import './Buscar.css'


export default function Buscar(props){
    const [descricao, setDescricao] = useState('');   
    const [dados, setDados] = useState('')

    async function BuscarDiploma(){
        if(descricao.trim() !== ''){
            api.get(`/diploma/` + descricao)
            .then(function(response){                
                let obj = response.data.dados
                setDados(obj)                           
                if(response.data.retorno){
                    notificacao('Achou', 'success')
                }else{
                    notificacao('Não achou', 'warn')
                }                
            })
            .catch(function(error){
                notificacao(error, 'error')
            })       
        }
    }

    function limpar(){
        setDescricao('')
        setDados('')        
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
            <Edit label='Código'  holder='Informe o código' descricao={descricao} valor={descricao} change={ e => setDescricao(e.target.value)} />    
            <Button name="Buscar"  color="primary" click={e => BuscarDiploma(descricao)}/>    
            <Button name="Cancelar" color="danger"  click={ e => limpar()} />                                                  
            </div> 
            <div className='CampoResultado'>                                
                { 
                    dados !== '' && <Grid obj={dados}/> 
                }
            </div>                      
            <ToastContainer />            
        </div>          
    )
}


