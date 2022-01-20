import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cart from './Cart';

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 430px) {
        flex-wrap: wrap;
    }  
`;

const Upper = styled.div`
    display: none;

    @media only screen and (max-width: 430px) {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
        font-size: 1em;
    }   
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 90px;

    @media only screen and (max-width: 430px) {
        font-size: 0.7em;
        
    }  
`;

const Language = styled.span`
    flex: 1;
    font-size: 0.7em;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: solid 0.5px lightgray;
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Input = styled.input`
    border: none;
    width: 100%;
    font-size: 1em;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;

    @media only screen and (max-width: 430px) {
        display: none;
    }  
`;

const Logo = styled.h1`
    font-size: 2em;
    margin-left:25px;

    @media only screen and (max-width: 780px) {
        font-size: 1.6em;
    } 
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 150px;

    @media only screen and (max-width: 430px) {
        font-size: 0.9em;
        flex: 8;
    }   
`;

const MenuItem = styled.div`
    font-size: 1em;
    cursor: pointer;
    margin-left: 25px;

    @media only screen and (max-width: 780px) {
        font-size: 0.7em;
        margin-left: 15px;
    }   
`;

const Navbar = (props) => {
    const { cartItems, onRemove, onAdd } = props;
    const [ openCart, setOpenCart ] = useState(false);
    const [ position, setPosition ] = useState('100%');

    const numItems = cartItems.reduce((a, c) => a + c.qty, 0);

    const closeCart = (x) => {
        setOpenCart(x);
    }

    useEffect(() => {
        if (openCart) {
            setPosition('70%');
        } else if (!openCart) {
            setPosition('100%');
        } else {
            setPosition('100%');
            setOpenCart(false);
            window.alert('An error occured when attempting to open the cart.');
        }
    }, [openCart])

    return (
        <Container>
            <Wrapper>
                <Upper>
                    <Logo>BIRD.</Logo>
                </Upper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color:'gray', fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>BIRD.</Logo>
                </Center>
                <Right>
                    <MenuItem>COLLECTIONS</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={`${numItems}`} color="primary">
                            <ShoppingCartOutlined onClick={() => {(openCart ? setOpenCart(false) : setOpenCart(true))}} />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
            <Cart closeCart={closeCart} numItems={numItems} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} position={position} />
        </Container>
    );
};

export default Navbar
