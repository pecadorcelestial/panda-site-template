
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
import * as Actions from './site';

describe('[Acción][Guardar] Título de la sección.', () => {
	it('Debe crear una acción para guardar el título de la sección.', () => {
		const expectedAction = {
			type: Actions.SECTION_TITLE,
			value: 'Título de sección.'
		};
		expect(Actions.setSectionTitle('Título de sección.')).toEqual(expectedAction);
	});
});

describe('[Acción][Guardar] Título de la página.', () => {
	it('Debe crear una acción para guardar el título de la página.', () => {
        const expectedAction = {
			type: Actions.PAGE_TITLE,
			value: 'Título de la pagina.'
		};
		expect(Actions.setPageTitle('Título de la pagina.')).toEqual(expectedAction);
	});
});

describe('[Acción][Guardar] Descripción de la página.', () => {
	it('Debe crear una acción para guardar la descripción de la página.', () => {
        const expectedAction = {
			type: Actions.PAGE_DESCRIPTION,
			value: 'Descripción de la pagina.'
		};
		expect(Actions.setPageDescription('Descripción de la pagina.')).toEqual(expectedAction);
	});
});
