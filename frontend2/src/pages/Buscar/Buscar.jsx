import React from 'react'
import Buscar from '../../components/Buscar/Buscar'
import Menu from  '../../components/menu/menu'
import Rodape from '../../components/Rodape/Rodape'


export default function PaginaBuscar(){
   return(
    <div >
        

        <div className="main">
            <div style={{marginLeft:'30px'}} >
                <Buscar descricao='Buscar Diploma' />
            </div>
        </div>      
        <Rodape />
    </div>
   )
}