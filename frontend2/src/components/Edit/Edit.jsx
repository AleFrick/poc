import React from 'react'

export default function Edit(props){

    return(
        <div>
            <label>{props.label}</label><br/>
            <input type="text" placeholder={props.holder} value={props.valor} name="edtBusca" onChange={props.change} />
        </div>
    )

}
