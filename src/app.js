import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Index from './index/index';
import Login from './login/login';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/' render={(props) => (<Index {...props} isLogged={true} buttonTitle='Contar'/>)}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </div>
        );
    }
}