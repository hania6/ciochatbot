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
                {
                    this.props.Chat.inputTypeChoices ?
                        <BtnsContainer>
                            {
                                this.props.Chat.choices.map((choice, index) => (<StyledButton key={index} onClick={() => {
                                    this.props.UpdateMsg(choice);
                                    this.props.SendMessage(choice, this.props.Chat.chatContext);
                                }}> {choice} </StyledButton>))
                            }
                        </BtnsContainer> :
                        <ChatInput
                            onSendClick={() => this.props.SendMessage(this.props.Chat.currentMsg, this.props.Chat.chatContext)}
                            onEnterClick={(e) => (e.keyCode === 13 ?
                                this.props.SendMessage(this.props.Chat.currentMsg, this.props.Chat.chatContext) : null)}
                            msg={this.props.Chat.currentMsg}
                            onMsgUpdate={(e) => this.props.UpdateMsg(e.target.value)}/>
                }
            </Container>
        );
    }
}

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


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;


const BtnsContainer = styled.div`
  box-sizing: border-box;
  width: 97%;
  height: 100%;
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 25px;
  position: relative;
  justify-content: space-evenly;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #FF8042;
  width: 20%;
  height: 2.5em;
  margin-left: 10px;
  font-size: 1.5rem;
  color: white;
`;
