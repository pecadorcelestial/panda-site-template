export const INITIALIZE_STORE = 'INITIALIZE_STORE';
export const initializeStore = (store) => ({
    type: INITIALIZE_STORE,
    value: store
});