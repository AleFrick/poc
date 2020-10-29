import React from 'react'
import { Button } from 'reactstrap'
import Menu from '../../components/menu/menu'


export default function Tester(){
    return(
    <div>
        <Menu />
        <div className="main">
            <h2 style={{textAlign:'center'}}> Bem vindo a página de teste </h2>            
        </div>             
    </div>
    )
}