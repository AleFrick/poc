import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import PaginaBusca from './pages/Buscar/Buscar'
import Menu from './components/menu/menu'

export default function Routes() {
    return (
        <>
            <Menu />
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact={true} />   
                    <Route path="/buscar" component={PaginaBusca} />
                </Switch>
            </BrowserRouter>
        </>
    );
}