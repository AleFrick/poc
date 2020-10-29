import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import PaginaBusca from './pages/Buscar/Buscar'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact={true} />   
                <Route path="/buscar" component={PaginaBusca} />
            </Switch>
        </BrowserRouter>
    );
}