//Módulos generales.
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Acciones.
import { initializeStore } from 'actions/actions';

//Componentes locales.
import Index from './index/index';
import Login from './login/login';

class App extends React.Component {
    //*** CONSTRUCTOR ***
    constructor(props) {
        super(props);
        if(__CLIENT__) {
            if (window.performance && performance.navigation.type == 1) {
                //La pagina se actualizó (con F5 o navegación manual).
                let localStore = localStorage.getItem('reduxStore');
                if(localStore) {
                    //Aquí se debe "despachar" una acción que inicialize el "store".
                    this.props.initializeStore(JSON.parse(localStore));
                }
            }
        }
    }
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
                    <Route exact path='/' render={(props) => (<Index {...props} isLogged={true} buttonTitle='Contar'/>)}/>
                    <Route path='/login' component={Login}/>
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