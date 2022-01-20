import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import popularProducts from '../data';

const Container = styled.div``;

const Home = () => {
    const { products } = popularProducts;
    const [ cartItems, setCartItems ] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map((x) => 
                x.id === product.id ? {...exist, qty: exist.qty + 1} : x));
        } else {
            setCartItems([...cartItems, {...product, qty: 1 }]);
        }        
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(cartItems.map((x) => 
                x.id === product.id ? {...exist, qty: exist.qty - 1} : x));
        }
    }

    return (
        <Container>
            <Announcement/>
            <Navbar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            <Slider/>
            <Categories/>
            <Products products={products} onAdd={onAdd} />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Home
