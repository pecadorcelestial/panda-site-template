//Módulos generales.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//Componentes estilizados.
const Layout = styled.div`
    background-color: #1476FB;
    box-sizing: border-box;
    height: 50px;
    margin: 0px;
    padding: 10px;
    width: 100%;
`;

const Title = styled.h1`
    color: #FFF;
    display: inline-block;
    height: 30px;
    float: left;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
    padding: 0px;
    width: auto;
`;

const UserName = styled.h1`
    color: #FFF;
    display: inline-block;
    height: 30px;
    float: right;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: normal;
    margin: 0px;
    padding: 0px;
    width: auto;
`;

class Header extends Component {
    //*** CONSTRUCTOR ***
    constructor() {
        super();
        this.state = {
            title: 'Header #1'
        };
    }
    //*** MÉTODOS ***
    changeTitle = (title) => {
        this.setState({ title });
    }
    //*** RESULTADO ***
    render() {
        return(
            <Layout>
                <Title>{this.state.title}</Title>
                <UserName>{this.props.user.name != '' ? this.props.user.name : 'Anónimo'}</UserName>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, null, null, { withRef: true })(Header);