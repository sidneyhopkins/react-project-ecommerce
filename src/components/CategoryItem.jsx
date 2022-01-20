import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    min-width: 250px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

const Title = styled.h1`
    color: white;
    background-color: rgba(20, 0, 0, .6);
    padding: 3%;
    
    font-size: 2em;
    margin-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.1);
        color: black;
    }
`;

const CategoryItem = ({ item }) => {
    return (

        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
