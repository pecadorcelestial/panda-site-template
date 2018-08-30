//Módulos generales.
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Reductores.
import Reducers from 'reducers/reducers';

//Store inicial.
import Store from './store';

//Funciones.
import { loadState } from './localStorage';

const configureStore = () => {

    //H   H  OOO  TTTTT      RRRR  EEEEE L      OOO   AAA  DDDD
    //H   H O   O   T        R   R E     L     O   O A   A D   D
    //HHHHH O   O   T        RRRR  EEE   L     O   O AAAAA D   D
    //H   H O   O   T        R   R E     L     O   O A   A D   D
    //H   H  OOO    T        R   R EEEEE LLLLL  OOO  A   A DDDD

    if(process.env.NODE_ENV.trim().toLowerCase() === 'development' && module.hot) {
        module.hot.accept('reducers/reducers', () => {
            //const nextRootReducer = combineReducers({ Reducers });
            store.replaceReducer(require('reducers/reducers').default);
        });
    }

    // CCCC  OOO  M   M PPPP   OOO   SSSS EEEEE
    //C     O   O MM MM P   P O   O S     E
    //C     O   O M M M PPPP  O   O  SSS  EEE
    //C     O   O M   M P     O   O     S E
    // CCCC  OOO  M   M P      OOO  SSSS  EEEEE

    //Permite el uso de varios "store enhancers" en una sola línea.
    //https://redux.js.org/glossary#store-enhancer
    const useReduxDevtools = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    const composeEnhancers = useReduxDevtools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    
    //EEEEE N   N H   H  AAA  N   N  CCCC EEEEE RRRR   SSSS
    //E     NN  N H   H A   A NN  N C     E     R   R S
    //EEE   N N N HHHHH AAAAA N N N C     EEE   RRRR   SSS
    //E     N  NN H   H A   A N  NN C     E     R   R     S
    //EEEEE N   N H   H A   A N   N  CCCC EEEEE R   R SSSS

    const Enhancer = composeEnhancers(
		applyMiddleware(
			thunk,								//Permite "despachar" acciones asíncronas.
			//reduxImmutableStateInvariant(),	//¡¡¡ESTO NO SE UTILIZA EN PRODUCCIÓN!!! -> https://github.com/leoasis/redux-immutable-state-invariant
		)
    );
    
    // SSSS TTTTT  OOO  RRRR  EEEEE
    //S       T   O   O R   R E
    // SSS    T   O   O RRRR  EEE
    //    S   T   O   O R   R E
    //SSSS    T    OOO  R   R EEEEE

    const store = createStore(Reducers, loadState(Store), Enhancer);
    return store;
}

export default configureStore;