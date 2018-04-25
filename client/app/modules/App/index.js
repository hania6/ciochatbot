import React from 'react';
import styled from 'styled-components';
// Loading Modules
import ChatLayout from '../ChatLayout';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <div>Charts we keda</div>
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
    overflow-x: hidden;
    background-color: #F3E4A3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`;

const ChatContainer = styled.div`
    border-radius: 20px;
    border: 4px solid black;
    display: inline-block;
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
`;
