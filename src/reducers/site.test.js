// SSSS IIIII TTTTT IIIII  OOO
//S       I     T     I   O   O
// SSS    I     T     I   O   O
//    S   I     T     I   O   O
//SSSS  IIIII   T   IIIII  OOO

//Reductor.
import Reducer from './site';
//Acciones.
import * as Actions from '../actions/site';
//Store inicial.
import Store from '../store/store';

describe('[Reductor] Sitio.', () => {
	//UNDEFINED
	it('Debe devolver el estado inicial.', () => {
		//Expectativa.
		expect(Reducer(undefined, {})).toEqual(Store.site);
	});
	//SECTION_TITLE
	it('Debe manejar el caso SECTION_TITLE.', () => {
		//Mock del estado inicial.
		const site = {
            section: {
                title: 'Título de la sección.'
            },
            page: {
                title: '',
                description: ''
            },
        };
		//Expectativa.
		expect(Reducer([], {
			type: Actions.SECTION_TITLE,
			value: 'Título de la sección.'
		})).toEqual(site);
	});
	//PAGE_TITLE
	it('Debe manejar el caso PAGE_TITLE.', () => {
		//Mock del estado resultado.
		const site = {
            section: {
                title: ''
            },
            page: {
                title: 'Título de la pagina.',
                description: ''
            },
        };
		//Expectativa.
		expect(Reducer([], {
			type: Actions.PAGE_TITLE,
			value: 'Título de la pagina.'
		})).toEqual(site);
    });
    //PAGE_DESCRIPTION
	it('Debe manejar el caso PAGE_DESCRIPTION.', () => {
		//Mock del estado resultado.
		const site = {
            section: {
                title: ''
            },
            page: {
                title: '',
                description: 'Descripción de la pagina.'
            },
        };
		//Expectativa.
		expect(Reducer([], {
			type: Actions.PAGE_DESCRIPTION,
			value: 'Descripción de la pagina.'
		})).toEqual(site);
    });
})