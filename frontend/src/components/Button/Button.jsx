import React, { Component } from 'react'
import './button.css'


export default props => (
    
    <button className='button' onClick={props.click}>
        {props.descricao}
    </button>
    
)
 