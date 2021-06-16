import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeTemplate from '../../component/templates/homeTemplate'
import Login from '../../pages/login/index'
import Register from '../../pages/register/'

function Routers() {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/' component={HomeTemplate} />
                <Route path='/home' component={HomeTemplate} />
            </Switch>
        </Router>
    )
}

export default Routers
