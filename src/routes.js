//Componentes locales.
import Index from './index/index';
import Login from './login/login';

const routes = [
    { 
        component: Index,
        exact: true,
        path: '/'
    },
    {
        component: Login,
        exact: true,
        path: '/login'
    }
];

export default routes;