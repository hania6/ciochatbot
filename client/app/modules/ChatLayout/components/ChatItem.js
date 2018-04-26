import React from 'react';
import styled, { css } from 'styled-components';
// Loading Modules

export default (props) => (
    <Container {...props}>
        <ImageContainer>
            <Image />
        </ImageContainer>
        <TextContainer {...props}>
            {props.text}
        </TextContainer>
    </Container>
);

const Container = styled.div`
    width: 40%;
    border-radius: 20px;
    box-shadow: 2px 3px 5px rgba(0,0,0,0.3);
    padding: 10px;
    background-color: rgba(61,112,178,0.1);
    display: flex;
    flex-direction: row;
    ${props => props.isOwn && css`
      justify-content: space-between;
      flex-direction: row-reverse;
    `}
`;

const ImageContainer = styled.div`
`;

const Image = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid black;
`;

const TextContainer = styled.div`
    display: inline-block;
    padding: 10px;
    font-size: 1.7rem;
    margin-left: 20px;
    margin-right: 0px;
    ${props => props.isOwn && css`
      margin-left: 0px;
      margin-right: 20px;
    `}
`;
