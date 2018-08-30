//Módulos generales.
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

//Componente local.
import App from './app';

//Store.
const store = configureStore();

//NOTA: Para poder hacer uso de la variable __CLIENT__ se debe inicializar/definir de la siguiente manera:
global.__CLIENT__ = true;
global.__SERVER__ = false;

export default class Routes extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<Routes/>, document.getElementById("root"));

if(process.env.NODE_ENV.trim().toLowerCase() === 'development' && module.hot) {
    module.hot.accept();
}
