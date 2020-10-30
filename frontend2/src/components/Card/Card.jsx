import React from 'react'
import { Card, CardTitle, CardText, CardHeader, CardBody } from 'reactstrap'

export default function EditCard(props){
    return(
        <div>
            <Card>
                <CardHeader> {props.titulo} </CardHeader>
                <CardBody>
                    <CardText> { props.texto } </CardText>
                </CardBody>
            </Card>
        </div>
    )
}