import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { useState } from 'react';
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};

    @media only screen and (max-width: 780px) {
        flex-direction: column;
    }
`;

const ImgContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 2em;
`;

const Desc = styled.p`
    margin: 50px 0;
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0.1em;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 1.1em;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4)
        } else {
            setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id} >
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Shop Now</Button>
                        </InfoContainer>
                    </Slide>
                ))} 
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')} >
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
