import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #88ADA5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 4em;
    margin-bottom: 20px;

    @media only screen and (max-width: 780px) {
        font-size: 3em;
    }  


    @media only screen and (max-width: 430px) {
        font-size: 2em;
    }  

`;

const Desc = styled.div`
    font-size: 1.5em;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;

    @media only screen and (max-width: 430px) {
        font-size: 1.1em;
    }  

`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

    @media only screen and (max-width: 430px) {
        width: 80%;
    }   
`;

const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

export const Newsletter = () => {
    return (
        <Container>
            <Title>Birder Newsletter</Title>
            <Desc>Get your free BIRD Photo of the Month.</Desc>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
