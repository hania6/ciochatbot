import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Importing Chat Components
import ChatWindowView from './Containers/ChatWindowView';
import ChatInput from './Components/ChatInput';
// Importing Action Creators
import { SendMessage, UpdateMsg } from './chatActions';

class ChatLayout extends Component {
    componentDidMount() {
        this.props.SendMessage('', this.props.Chat.chatContext);
    }
    render() {
        return (
            <Container>
                <ChatWindowView chatLog={this.props.Chat.chatLog} />
                <ChatInput
                    onSendClick={() => this.props.SendMessage(this.props.Chat.currentMsg, this.props.Chat.chatContext)}
                    onEnterClick={(e) => {
                        return e.keyCode === 13 ?
                            this.props.SendMessage(this.props.Chat.currentMsg, this.props.Chat.chatContext) : null;
                    }}
                    msg={this.props.Chat.currentMsg}
                    onMsgUpdate={(e) => this.props.UpdateMsg(e.target.value)}/>
            </Container>
        );
    }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

//export default ChatLayout;

function mapStateToProps(state) {
    return {
        Chat: state.Chat
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        SendMessage: SendMessage,
        UpdateMsg: UpdateMsg
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChatLayout);
