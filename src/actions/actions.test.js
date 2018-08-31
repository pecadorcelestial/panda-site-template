
//M   M  OOO   CCCC K   K
//MM MM O   O C     K  K
//M M M O   O C     KKK
//M   M O   O C     K  K
//M   M  OOO   CCCC K   K

//(OPCIONAL).
/*
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
*/

// AAA   CCCC  CCCC IIIII  OOO  N   N EEEEE  SSSS
//A   A C     C       I   O   O NN  N E     S
//AAAAA C     C       I   O   O N N N EEE    SSS
//A   A C     C       I   O   O N  NN E         S
//A   A  CCCC  CCCC IIIII  OOO  N   N EEEEE SSSS

//Acciones.
import * as Actions from './actions';

describe('[Acción] Inicializar el STORE.', () => {
	it('Debe crear una acción para inicializar el STORE.', () => {
        const store = {
            site: {
                section: {
                    title: 'Título (sección)'
                },
                page: {
                    title: 'Título (pagina)',
                    description: 'Descripción'
                },
            },
            user: {
                name: 'Francisco',
                lastName: 'Rodríguez',
                permissions: [
                    {
                        module: '',
                        get: true,
                        post: false,
                        delete: false
                    }
                ]
            },
            clients: {
                client: {
                    contact: {},
                    billing: {},
                    services: []
                },
                list: []
            }
        };
		const expectedAction = {
			type: Actions.INITIALIZE_STORE,
			value: store
		};
		expect(Actions.initializeStore(store)).toEqual(expectedAction);
	});
})
