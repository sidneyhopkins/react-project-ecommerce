import React from 'react';
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Title = styled.div`
    width: 100vw;
    text-align: center;
    font-weight: 200;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

const Products = (props) => {
    const { products, onAdd } = props;

    return (
        <Container>
            <Title>Popular Watercolors</Title>
            {products.map((product) => (
                <Product product={product} key={product.id} onAdd={onAdd} />
            ))}
        </Container>
    )
}

export default Products