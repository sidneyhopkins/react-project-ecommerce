import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    font-weight: bolder;
    word-spacing: 2px;

    @media only screen and (max-width: 430px) {
        font-size: 0.8em;
    }  

`;

const Announcement = () => {
    return (
        <Container>
            Summer Sale! Free Shipping On Orders Over $50
        </Container>
    )
}

export default Announcement
