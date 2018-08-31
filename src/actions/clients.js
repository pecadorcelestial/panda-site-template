export const CLIENT_INFO = 'CLIENTS_CLIENT';
export const saveClientInfo = (info) => ({
    type: CLIENT_INFO,
    value: info
});

export const CLIENTS_LIST = 'CLIENTS_LIST';
export const saveClientsList = (list) => ({
    type: CLIENTS_LIST,
    value: list
});