//Módulos generales.
import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Rutas.
import Routes from './routes';

//Acciones.
import { initializeStore } from 'actions/actions';

//Componentes locales.

class App extends React.Component {
    //*** FUNCIONES DEL CICLO DE VIDA DE LA PAGINA ***
    componentDidMount() {
        if(__CLIENT__) {
            //Se utiliza el evento "BeforeUnload" de la ventana para guardar el estado actual.
            window.addEventListener('beforeunload', this.handleWindowOnBeforeUnload);
        }
    }
    componentWillUnmount() {
        if(__CLIENT__) {
            //Se remueve el evento "BeforeUnload".
            window.addEventListener('beforeunload', this.handleWindowOnBeforeUnload);
        }
    }
    //*** HANDLERS ***
    handleWindowOnBeforeUnload = () => {
        //Se intenta guardar el estado actual en el localStorage.
        try {
            localStorage.setItem('reduxStore', JSON.stringify(this.props.store));
        } catch(exception) {
            //No tiene caso "loggear" información del lado del cliente, ya que la pagina se va a actualizar y esta información podría perderse.
        }
    }
    //*** RESULTADO ***
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
                    {
                        Routes.map((route, index) => <Route key={`route-${index}`} {...route} onSuccess={this.handleAppSuccess} onError={this.handleAppError} onWorking={this.handleAppWorking}/>)
                    }
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initializeStore: (store) => {dispatch(initializeStore(store))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));