// CCCC L     IIIII EEEEE N   N TTTTT EEEEE  SSSS
//C     L       I   E     NN  N   T   E     S
//C     L       I   EEE   N N N   T   EEE    SSS
//C     L       I   E     N  NN   T   E         S
// CCCC LLLLL IIIII EEEEE N   N   T   EEEEE SSSS

//Reductor.
import Reducer from './clients';
//Acciones.
import * as Actions from '../actions/clients';
//Store inicial.
import Store from '../store/store';

describe('[Reductor] Clientes.', () => {
	//UNDEFINED
	it('Debe devolver el estado inicial.', () => {
		//Expectativa.
		expect(Reducer(undefined, {})).toEqual(Store.clients);
	});
	//CLIENT_INFO
	it('Debe manejar el caso CLIENT_INFO.', () => {
		//Mock de la información el cliente.
		const info = {
            name: '',
            lastName: '',
            bussinesName: '',
            addressId: 1,
            clientTypeId: 1
        };
		//Mock del estado inicial.
		const clients = {
			client: {
				info
			},
			list: []
		};
		//Expectativa.
		expect(Reducer([], {
			type: Actions.CLIENT_INFO,
			value: info
		})).toEqual(clients);
	});
	//CLIENTS_LIST
	it('Debe manejar el caso CLIENTS_LIST.', () => {
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
		//Mock del estado resultado.
		const clients = {
			client: {
				info: {},
				contact: {},
				billing: {},
				services: []
			},
			list
		};
		//Expectativa.
		expect(Reducer([], {
			type: Actions.CLIENTS_LIST,
			value: list
		})).toEqual(clients);
    });
})