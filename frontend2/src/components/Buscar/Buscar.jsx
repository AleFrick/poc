import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
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
                    //notificacao('Diploma Encontrado', 'success')
                }else{
                    notificacao('Diploma não encontrado.', 'warn')
                }                
            })
            .catch(function(error){
                notificacao(error, 'error')
            })       
        }
    }

    function verifica(e){
        if(e.key === 'Enter'){
            BuscarDiploma()
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
        /*<div>
            <h1 className="titulo">{props.descricao}</h1>            
            <div className='CamposBusca'>            
            <Edit label='Código'  holder='Informe o código' 
                descricao={descricao} valor={descricao} 
                press={ e => verifica(e)} 
                change={ e => setDescricao(e.target.value)} 
            />    

            <Button name="Buscar"  color="primary" click={e => BuscarDiploma(descricao)}/>    
            <Button name="Cancelar" color="danger"  click={ e => limpar()} />                                                  
            </div> 
            <div className='CampoResultado'>                                
                { 
                    dados !== '' && <Grid obj={dados}/> 
                }
            </div>                      
            <ToastContainer />            
        </div>          */
        <div>
            <h1 className="titulo">{props.descricao}</h1>   
            <br />         
            <Row>
                <Col sm='3'>
                    <Edit label='Código'  holder='Informe o código' 
                        descricao={descricao} valor={descricao} 
                        press={ e => verifica(e)} 
                        change={ e => setDescricao(e.target.value)} 
                        style={{width:'100%'}}
                    /> 
                    <Button name="Buscar"  style={{width:'50%'}} color="primary" click={e => BuscarDiploma(descricao)}/>    
                    <Button name="Cancelar" style={{width:'50%'}} color="danger"  click={ e => limpar()} />                                                              
                </Col>
                <Col sm='9'>
                    { 
                        dados !== '' && <Grid obj={dados} /> 
                    }
                </Col>
            </Row>
            <ToastContainer />  
        </div>



    )
}


