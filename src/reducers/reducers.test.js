// CCCC L     IIIII EEEEE N   N TTTTT EEEEE  SSSS
//C     L       I   E     NN  N   T   E     S
//C     L       I   EEE   N N N   T   EEE    SSS
//C     L       I   E     N  NN   T   E         S
// CCCC LLLLL IIIII EEEEE N   N   T   EEEEE SSSS

//Reductor.
import Reducer from './reducers';
//Acciones.
import * as Actions from '../actions/actions';
//Store inicial.
import Store from '../store/store';

describe('[Reductor] Reductores combinados.', () => {
	//UNDEFINED
	it('Debe devolver el estado inicial.', () => {
		//Expectativa.
		expect(Reducer(undefined, {})).toEqual(Store);
	});
	//INITIALIZE_STORE
	it('Debe manejar el caso INITIALIZE_STORE.', () => {
		//Mock de la información el cliente.
		const info = {
            name: '',
            lastName: '',
            bussinesName: '',
            addressId: 1,
            clientTypeId: 1
        };
		//Mock del listado de clientes.
		const list = [
            {
                name: '',
                lastName: '',
                bussinesName: '',
                addressId: 1,
                clientTypeId: 1
            },
            {
                name: '',
                lastName: '',
                bussinesName: '',
                addressId: 1,
                clientTypeId: 1
            },
            {
                name: '',
                lastName: '',
                bussinesName: '',
                addressId: 1,
                clientTypeId: 1
            }
        ];
		//Mock del estado inicial.
		const store = {
            site: {
                section: {
                    title: 'Título de la sección.'
                },
                page: {
                    title: 'Título de la pagina.',
                    description: 'Descripción de la pagina.'
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
                    info,
                    contact: {},
                    billing: {},
                    services: []
                },
                list
            }
        };
		//Expectativa.
		expect(Reducer([], {
			type: Actions.INITIALIZE_STORE,
			value: store
		})).toEqual(store);
	});
})