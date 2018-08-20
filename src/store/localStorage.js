//Descripción: Obtiene el "store" desde el almacenamiento local, si no existe devuelve el valor por defecto.
//Parámetros: 
//          state: Objeto tipo JSON con el state por defecto.
//Resultado: Un objeto tipo JSON con la información recuperada.
export const loadState = (state) => {
    try {
        if (window.performance && performance.navigation.type == 1) {
            //La pagina se actualizó (con F5 o navegación manual).
            let localStore = localStorage.getItem('reduxStore');
            if(localStore) {
                return JSON.parse(localStore);
            }
        }
    } catch(exception) {
        return state;
    }
}

//Descripción: Guarda en el "store" el estado actual.
//Parámetros:
//          state: Objeto tipo JSON con el state a guardar.
//Resultado: True o False dependiendo del resultado de la operación.
export const saveState = (state) => {
    try {
        localStorage.setItem('reduxStore', JSON.stringify(this.props.store));
        return true;
    } catch(exception) {
        return false;
    }
}