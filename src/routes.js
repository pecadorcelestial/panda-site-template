//Módulos genéricos.
import React, { Component } from 'react';

//Importación dinámica.
class DynamicImport extends Component {
    constructor() {
        super();
        this.state = {
            component: null
        };
    }
    componentDidMount() {
        this.props.load()
        .then(component => {
            this.setState({
                component: component.default ? component.default : component
            });
        })
    }
    render() {
        return(this.props.children(this.state.component));
    }
}

//Componentes locales.
const Home = (props) => (
    <DynamicImport load={() => import('./index/index')}>
        {
            (Component) => Component === null ?
            <p>Loading...</p> :
            <Component {...props}/>
        }
    </DynamicImport>
);
const Login = (props) => (
    <DynamicImport load={() => import('./login/login')}>
        {
            (Component) => Component === null ?
            <p>Loading...</p> :
            <Component {...props}/>
        }
    </DynamicImport>
);

//Rutas.
const routes = [
    { 
        component: Home,
        exact: true,
        path: '/'
    },
    {
        component: Login,
        exact: true,
        path: '/login'
    }
];

export default routes;