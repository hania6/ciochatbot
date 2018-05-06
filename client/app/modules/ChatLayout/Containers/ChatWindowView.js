import React, { Component } from 'react';
import styled from 'styled-components';
import scrollIntoView from 'scroll-into-view-if-needed';
// Loading Modules
import ChatItem from '../Components/ChatItem';

export default class ChatWindowView extends Component {
    componentDidMount() {
        const node = document.getElementById('last-chat-element');

        scrollIntoView(node, {
            scrollMode: 'if-needed',
            block: 'nearest',
            inline: 'nearest'
        });
    }

    componentDidUpdate() {
        const node = document.getElementById('last-chat-element');

        scrollIntoView(node, {
            scrollMode: 'if-needed',
            block: 'nearest',
            inline: 'nearest'
        });
    }

    render() {
        return (
            <Container>
                {this.props.chatLog.map((msg, index) => {
                    if (index === this.props.chatLog.length - 1) {
                        return <ChatItem {...msg}/>;
                    } else {
                        return <ChatItem {...msg}/>;
                    }
                })}
                <div id="last-chat-element" />
            </Container>
        );
    }
}

const Container = styled.div`
    width: 95%;
    height: 90vh;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
