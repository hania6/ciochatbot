import React from 'react';
import styled from 'styled-components';
// Loading Modules
import ChatLayout from '../ChatLayout';
import Chart from '../Charts';
import DevTools from '../DevTools';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <DevTools />
                <ChartTextContainer>
                    <Chart/>
                </ChartTextContainer>
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

const ChartTextContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #212121;
`;
