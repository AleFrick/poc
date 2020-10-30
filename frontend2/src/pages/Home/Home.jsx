import React from 'react'
import { Row, Col } from 'reactstrap'

import Menu from '../../components/menu/menu'
import Rodape from '../../components/Rodape/Rodape'
import CardE from '../../components/Card/Card'


export default function Tester(){
    return(
    <div>
       
        <div className="main">
            <h2 style={{textAlign:'center'}}> Bem vindo a página de teste </h2>   
            <br />
            <Row style={{alignItems:'center'}}>
                <Col sm='3'/>
                <Col sm='6'>
                    <CardE titulo='Teste Um' texto={
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet diam suscipit, tristique ex eget, finibus felis. Pellentesque viverra aliquam sem non interdum. Curabitur placerat nisl id nunc dictum, sed euismod libero dictum. Quisque nec tristique turpis. Duis ut urna aliquet, luctus dui et, hendrerit orci. Phasellus tempus ultrices metus sit amet mattis. Cras vitae tellus id ex vestibulum suscipit a accumsan diam. Suspendisse potenti. Vivamus id congue risus. Proin quis pellentesque quam. Quisque et dictum justo, id bibendum felis. Phasellus fringilla sapien non dui rutrum, sed maximus erat sagittis.`}
                    />
                </Col>                
            </Row>
        </div>             
        <Rodape />       
    </div>
    )
}