import React from 'react'
import { Button } from 'reactstrap'
import './Button.css'


export default function eButton( props ){
  return(       
        <Button outline color="primary" className="editBtn" onClick={props.click}>
          {props.name}
        </Button>        
        
    )
}