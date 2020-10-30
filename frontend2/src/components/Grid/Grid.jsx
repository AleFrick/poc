import React from 'react'
import { Table } from 'reactstrap'


export default function Grid(props){
    if(props.obj.cod_diploma !== ''){
        return(        
            <div>
                <Table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Código Diploma</th>
                            <th>Instituiçao de Ensino</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th scope='now' >1</th>
                        <td> { props.obj.nome } </td>
                        <td> { props.obj.idade } </td>                
                        <td> { props.obj.cod_diploma } </td>
                        <td> { props.obj.ie } </td>
                    </tbody>
                </Table>
            </div>
        )   
    }else{
        return(
            <div></div>
        )
    }
}