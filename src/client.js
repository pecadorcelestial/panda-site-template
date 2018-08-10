import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './app';

const store = configureStore();

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

if(process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
}
