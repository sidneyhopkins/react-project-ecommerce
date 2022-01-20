import React from 'react';
import { EmailOutlined, Facebook, Instagram, PhoneOutlined, PinDropOutlined, Pinterest, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 200px;

    @media only screen and (max-width: 780px) {
        flex-direction: column;
    }   

`;

const Left = styled.div`
    flex: 1;
    margin: 0 20px;
    
`;

const Logo = styled.h1`
    margin: 10px 0;
`;

const Desc = styled.p`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: 780px) {
        text-align: center;
    } 
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    height: 30px;
`;

const Home = styled.a`
    &:link {
        color: black;
        text-decoration: none;
    }
    &:visited {
        color: black;
        text-decoration: none;

    }
    &:hover {
        color: teal;
    }
`;

export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BIRD.</Logo>
                <Desc>Laborum ipsum pariatur fugiat nulla Lorem voluptate tempor consectetur labore exercitation.</Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links</Title>
                <List>
                    <ListItem><Home href="../Home">Home</Home></ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Track Order</ListItem>
                    <ListItem>Collections</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Partners</ListItem>
                    <ListItem>Press</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <PinDropOutlined style={{marginRight:"10px"}}/>321 Example Ln , Mytown, NW 29445
                </ContactItem>
                <ContactItem>
                    <PhoneOutlined style={{marginRight:"10px"}}/>+1 234 567 8901
                </ContactItem>
                <ContactItem>
                    <EmailOutlined style={{marginRight:"10px"}}/>contact@bird.com
                </ContactItem>
                <Payment src='https://res.cloudinary.com/sidney/image/upload/v1642350111/Logos-01_wclrmv.png' />
            </Right>
        </Container>
    )
}

export default Footer
