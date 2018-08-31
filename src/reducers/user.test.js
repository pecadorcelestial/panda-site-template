//U   U  SSSS U   U  AAA  RRRR  IIIII  OOO
//U   U S     U   U A   A R   R   I   O   O
//U   U  SSS  U   U AAAAA RRRR    I   O   O
//U   U     S U   U A   A R   R   I   O   O
// UUU  SSSS   UUU  A   A R   R IIIII  OOO

//Reductor.
import Reducer from './user';
//Acciones.
import * as Actions from '../actions/user';
//Store inicial.
import Store from '../store/store';

describe('[Reductor] Reductores combinados.', () => {
	//UNDEFINED
	it('Debe devolver el estado inicial.', () => {
		//Expectativa.
		expect(Reducer(undefined, {})).toEqual(Store.user);
	});
	//USER_NAME
	it('Debe manejar el caso USER_NAME.', () => {
		//Mock del estado inicial.
		const user = {
            name: 'Francisco'
        };
		//Expectativa.
		expect(Reducer([], {
			type: Actions.USER_NAME,
			value: 'Francisco'
		})).toEqual(user);
	});
	//USER_LAST_NAME
	it('Debe manejar el caso USER_LAST_NAME.', () => {
		//Mock del estado inicial.
		const user = {
            lastName: 'Rodríguez'
        };
		//Expectativa.
		expect(Reducer([], {
			type: Actions.USER_LAST_NAME,
			value: 'Rodríguez'
		})).toEqual(user);
	});
	//USER_PERMISSIONS
	it('Debe manejar el caso USER_PERMISSIONS.', () => {
        //Mock de los permisos del usuario por módulo.
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
		//Mock del estado inicial.
		const user = {
            permissions
        };
		//Expectativa.
		expect(Reducer([], {
			type: Actions.USER_PERMISSIONS,
			value: permissions
		})).toEqual(user);
	});
})