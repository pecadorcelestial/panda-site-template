//Módulos generales.
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

//Componentes generales.
import Header from './header';

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

const Title = styled.h1`
    color: #000;
    display: inline-block;
    height: 30px;
    float: left;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
`;

const StyledLink = styled(Link)`
    background-color: #FFF;
    border: 1px solid #FF456A;
    border-radius: 5px;
    box-sizing: border-box;
    color: #FF456A;
    display: inline-block;
    height: 30px;
    float: left;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 15px;
    margin: 0px;
    text-decoration: none;
    width: auto;
    
    &:hover {
        background-color: #CC1F62;
        border: 1px solid #CC1F62;
        color: #FFF;
        text-decoration: none;
    }
    
`;

class Index extends Component {
    //*** CONSTRUCTOR ***
    constructor() {
        super();
        this.state = {
            title: 'Contador: ',
            counter: 0
        }
    }
    //*** FUNCIONES DEL CICLO DE VIDA DEL COMPONENTE ***
    componentWillMount() {
        console.log('Component will mount.');
    }
    componentDidMount() {
        console.log('Component did mount.');
    }
    componentWillUnmount() {
        console.log('Component will unmount.');
    }
    //*** HANDLERS ***
    handleAdd1ToCounterOnClick = (event) => {
        let counter = this.state.counter;
        counter++;
        this.setState({ counter });
    }
    //*** RESULTADO ***
    render() {
        return(
            <Layout>
                <Header ref={header => { this.HeaderRef = header && header.getWrappedInstance(); }}/>
                <Title>{this.state.title + this.state.counter}</Title>
                <Button theme='blue' type='button' onClick={this.handleAdd1ToCounterOnClick}>{this.props.buttonTitle}</Button>
                <br/>
                <Button theme='red' type='button' onClick={() => { this.HeaderRef.changeTitle('Nuevo encabezado'); }}>Cambiar encabezado</Button>
                <br/>
                <StyledLink to='/login'>Login</StyledLink>
            </Layout>
        );
    }
}

export default withRouter(Index);