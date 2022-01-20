import React from 'react';
import { AddOutlined, FavoriteOutlined, SearchOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D2DDDE;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Image = styled.img`
    width: 75%;
    height: 75%;
    z-index: 2;
    object-fit: contain;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: lightblue;
        transform: scale(1.1);
    }
`;

export const Product = (props) => {
    const { product, onAdd } = props;

    return (
        <Container>
            <Image src={product.img} alt={product.name}/>
            <Info>
                <Icon key={product.id} onClick={()=>onAdd(product) }>
                    <AddOutlined  />
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
