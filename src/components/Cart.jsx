import React from 'react';
import styled from 'styled-components';
import { AddOutlined, CloseOutlined } from '@material-ui/icons';
import Item from '../components/Item';

const CartContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 30%;
    max-height: 80vh;
    top: 80px;
    z-index: 5;
    background-color: white;
    transition: all 1s ease;
    overflow-y: scroll;

    @media only screen and (max-width: 430px) {
        top: 100px;
    }  
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: lightgray;
`;

const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
`;

const Close = styled.div`
    cursor: pointer;
    flex: 1;
    color: black;
    padding: 0 3px;

    &:hover {
        color: white;
    }
`;

const Title = styled.div`
    font-weight: 200;
    text-align: center;
    font-size: 1.6em;
    flex: 8;

    @media only screen and (max-width: 430px) {
        font-size: 1em;
    }  
`;

const ButtonDiv = styled.div`
    width: 100%;
`;

const Button = styled.button`
    padding: 10px;
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    border-bottom: 1px solid darkgray;
    cursor: pointer;

    &:hover {
        background-color: lightblue;
        
    }
`;

const Middle = styled.div``;

const CartItems = styled.div``;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1em;
    background-color: lightgray;
`;

const Info = styled.div`
    margin: 3px;

    @media only screen and (max-width: 430px) {
        font-size: 0.76em;
    }  
`;

const Cart = (props) => {
    const { cartItems, onAdd, onRemove, closeCart, numItems, position } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.07;
    const shippingPrice = itemsPrice > 50 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <CartContainer style={{left:`${position}`}}>
            <Top>
                <TitleDiv>
                    <Close>
                        <CloseOutlined style={{margin:'0 0px'}} onClick={() => closeCart(false)}/>
                    </Close>
                    <Title>
                        Cart ({numItems})
                    </Title>
                </TitleDiv>
                <ButtonDiv>
                    <Button>Checkout Now</Button>
                </ButtonDiv>
            </Top>

            <Middle>
                <CartItems>
                    <div>{cartItems.length === 0 && <div style={{textAlign:"center", fontSize:"0.9em"}}>Cart Is Empty<br/><br/><AddOutlined style={{fontSize:'0.9em'}}/> To add items to the cart, hover over a watercolor painting.</div>}</div>
                    {cartItems.map((item) => (
                        <Item key={item.id} item={item} onAdd={onAdd} onRemove={onRemove} ></Item>
                    ))}
                </CartItems>
            </Middle>
            
            {cartItems.length !== 0 && (
                <Bottom>
                    {itemsPrice < 50 && 
                        <Info style={{fontStyle:"italic", fontWeight:'800', fontSize:"0.7em"}}>Free shipping on orders over $50</Info>
                    }
                    <Info>Price: ${itemsPrice.toFixed(2)}</Info>
                    <Info>Tax: ${taxPrice.toFixed(2)}</Info>
                    <Info>Shipping: ${shippingPrice.toFixed(2)}</Info>
                    <Info style={{fontWeight:'600'}}>Total: ${totalPrice.toFixed(2)}</Info>
                    <ButtonDiv>
                        <Button>Checkout Now</Button>
                    </ButtonDiv>
                </Bottom>
            )}
        </CartContainer>
    )
}

export default Cart
