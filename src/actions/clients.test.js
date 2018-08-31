
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
import * as Actions from './clients';

describe('[Acción][Guardar] Información del cliente.', () => {
	it('Debe crear una acción para guardar la información del cliente.', () => {
        const client = {
            name: '',
            lastName: '',
            bussinesName: '',
            addressId: 1,
            clientTypeId: 1
        };
		const expectedAction = {
			type: Actions.CLIENT_INFO,
			value: client
		};
		expect(Actions.saveClientInfo(client)).toEqual(expectedAction);
	});
});

describe('[Acción][Guardar] Listado de clientes.', () => {
	it('Debe crear una acción para guardar el listado de clientes.', () => {
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
		const expectedAction = {
			type: Actions.CLIENTS_LIST,
			value: list
		};
		expect(Actions.saveClientsList(list)).toEqual(expectedAction);
	});
});
