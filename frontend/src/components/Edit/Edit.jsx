import React, { Component } from 'react'

export default props => (
    <div>
        <label>Campo de busca</label><br/>
        <input type="text"  name="edtBusca" value={props.descricao} onChange={props.change} />
    </div>
)
