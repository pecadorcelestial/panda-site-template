export const CLIENTS_CLIENT = 'CLIENTS_CLIENT';
export const saveClientsClient = (client) => ({
    type: CLIENTS_CLIENT,
    value: client
});

export const CLIENTS_LIST = 'CLIENTS_LIST';
export const saveClientsList = (list) => ({
    type: CLIENTS_LIST,
    value: list
});