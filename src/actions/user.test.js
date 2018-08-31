
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
import * as Actions from './user';

describe('[Acción][Guardar] Nombre.', () => {
	it('Debe crear una acción para guardar el nombre de usuario.', () => {
		const expectedAction = {
			type: Actions.USER_NAME,
			value: 'Francisco'
		};
		expect(Actions.saveUserName('Francisco')).toEqual(expectedAction);
	});
});

describe('[Acción][Guardar] Apellido.', () => {
	it('Debe crear una acción para guardar el apellido del usuario.', () => {
        const expectedAction = {
			type: Actions.USER_LAST_NAME,
			value: 'Rodríguez'
		};
		expect(Actions.saveUserLastName('Rodríguez')).toEqual(expectedAction);
	});
});

describe('[Acción][Guardar] Permisos.', () => {
	it('Debe crear una acción para guardar los permisos del usuario.', () => {
        const permissions = [
            {
                module: 'clients',
                get: true,
                post: false,
                delete: false
            },
            {
                module: 'products',
                get: true,
                post: false,
                delete: false
            }
        ];
        const expectedAction = {
			type: Actions.USER_PERMISSIONS,
			value: permissions
		};
		expect(Actions.saveUserPermissions(permissions)).toEqual(expectedAction);
	});
});
