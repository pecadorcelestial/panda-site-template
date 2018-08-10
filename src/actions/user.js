export const USER_NAME = 'USER_NAME';
export const saveUserName = (name) => ({
    type: USER_NAME,
    value: name
});

export const USER_LAST_NAME = 'USER_LAST_NAME';
export const saveUserLastName = (lastName) => ({
    type: USER_LAST_NAME,
    value: lastName
});

export const USER_PERMISSIONS = 'USER_PERMISSIONS';
export const saveUserPermissions = (permissions) => ({
    type: USER_PERMISSIONS,
    value: permissions
});