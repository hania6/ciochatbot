import React from 'react';
import styled from 'styled-components';
// Loading Modules
import ChatLayout from '../ChatLayout';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <TextContainer>Charts we keda</TextContainer>
                <ChatContainer>
                    <ChatLayout />
                </ChatContainer>
            </Container>
        );
    }
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    font-family: "IBM Plex Sans";
    overflow-x: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`;

const ChatContainer = styled.div`
    display: inline-block;
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
    background: #F1F1F1;
`;

const TextContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #212121;
`
