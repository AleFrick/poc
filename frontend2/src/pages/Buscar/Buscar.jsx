import React from 'react'
import Buscar from '../../components/Buscar/Buscar'
import Menu from  '../../components/menu/menu'


export default function PaginaBuscar(){
   return(
    <div >
        <Menu />
        <div className="main">
            <div style={{marginLeft:'30px'}} >
                <Buscar descricao='Verificar Nomes' />
            </div>
        </div>      
    </div>
   )
}