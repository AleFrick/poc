import React from 'react'
import { Button } from 'reactstrap'
import './Button.css'


export default function eButton( props ){
  return(       
        <Button outline color={props.color} className="editBtn" onClick={props.click}>
          {props.name}
        </Button>        
        
    )
}