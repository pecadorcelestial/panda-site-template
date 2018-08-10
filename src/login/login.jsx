import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//Acciones.
import * as User from 'actions/user';

//Componentes estilizados.
const Layout = styled.div`
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const getButtonTheme = (theme) => {
    switch(theme) {
        case 'blue':
            return `
                background-color: #1476FB;
            `;
        case 'red':
            return `
                background-color: #FF456A;
            `;
    }
};

const Button = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    padding: 0px 15px;

    ${props => getButtonTheme(props.theme)}
`;

class Login extends Component {
    render() {
        return(
            <Layout>
                <Button theme='blue' type='button' onClick={() => { this.props.saveUserName('Fulanito de Tal'); }}>Entrar</Button>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo
});

const mapDispatchToProps = (dispatch) => ({
    saveUserName: (username) => dispatch(User.saveUserName(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);