import React from 'react'
import Menu from '../../components/menu/menu'
import Rodape from '../../components/Rodape/Rodape'

export default function Tester(){
    return(
    <div>
        <Menu />
        <div className="main">
            <h2 style={{textAlign:'center'}}> Bem vindo a página de teste </h2>            
        </div>             
        <Rodape />       
    </div>
    )
}