import React from 'react';
import styled, { css } from 'styled-components';
// Loading Modules

export default (props) => (
    <Container {...props}>
        <ImageContainer>
            <Image src={props.isOwn ? 'assets/img/businessman.png' : 'assets/img/manager.png'}/>
        </ImageContainer>
        <TextContainer isOwn= {props.isOwn}>
            {props.text}
        </TextContainer>
    </Container>
);

const Container = styled.div`
    width: 60%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    margin-bottom: 15px;
    color: white;
    font-weight: 600;
    ${props => props.isOwn && css`
      align-self: flex-end;
      justify-content: space-between;
      flex-direction: row-reverse;
    `}
`;

const ImageContainer = styled.div`
    height: 80px;
    width: 80px;
`;

const Image = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`;

const TextContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    font-size: 1.2rem;
    margin-left: 20px;
    margin-right: 0px;
    border-radius: 20px;
    background-color: rgba(61,112,178);
    box-shadow: 2px 3px 5px rgba(0,0,0,0.3);
    ${props => props.isOwn && css`
      margin-left: 0px;
      margin-right: 20px;
    `}
`;
