import React from 'react';
import { AddOutlined, RemoveOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 2px 0 15px 0;

    @media only screen and (max-width: 430px) {
        flex-direction: column;
        align-items: center;
    }  

`;

const Image = styled.img`
    width: 60%;
    margin: 0 3px;
    border: 3px solid black;

    @media only screen and (max-width: 780px) {
        width: 50%;
    } 

    @media only screen and (max-width: 430px) {
        width: 80%
    }  


`;

const Info = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (max-width: 780px) {
        width: 50%;
        font-size: 0.9em;
    } 

    @media only screen and (max-width: 430px) {
        width: 100%
    }  



`;

const InfoItem = styled.h4`
    font-weight: 600;
    font-size: 1em;
    margin-bottom: 10px;
    
    @media only screen and (max-width: 430px) {
        margin-left: 10px;
    }  

`;

const Delete = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    color: slategray;
    border-radius: 50%;
    margin-left: 3px;

    &:hover {
        background-color: lightblue;
    }
`;

const Add = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    color: slategray;
    border-radius: 50%;
    margin-left: 3px;

    &:hover {
        background-color: lightblue;
    }
`;

export const Item = (props) => {
    const { item, onAdd, onRemove } = props;

    return (
        <Container>
                <Image src={item.img} alt={item.name}/>
                <Info>
                    <InfoItem>{item.name}</InfoItem>
                    <InfoItem>{item.qty} X ${item.price.toFixed(2)}</InfoItem>
                    <InfoItem style={{display:'flex'}}>
                        <Delete onClick={()=>onRemove(item)} >
                            <RemoveOutlined />
                        </Delete>
                        <Add>
                            <AddOutlined onClick={()=>onAdd(item)} />
                        </Add>
                    </InfoItem>  
                </Info>
        </Container>
    )
}

export default Item