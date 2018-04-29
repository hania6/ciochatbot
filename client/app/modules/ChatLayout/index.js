import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Importing Chat Components
import ChatWindowView from './Containers/ChatWindowView';
import ChatInput from './components/ChatInput';
import ChatItem from './components/ChatItem';
// Importing Action Creators
import { ADD_USER } from './chatActions';


class ChatLayout extends Component {
    render() {
        return (
            <Container>
                <ChatWindowView>
                    <ChatItem text={'hi'}/>
                    <ChatItem text={'hi'}/>
                    <ChatItem text={'hi'} isOwn/>
                    <ChatItem text={'hi'}/>
                    <ChatItem text={'hi'}/>
                    <ChatItem text={'hi'}/>
                    <ChatItem text={'hi'} isOwn/>
                    <ChatItem text={'hi'}/>
                    <ChatItem text={'hi'}/>
                    <ChatItem text={'hi'} isOwn/>
                    <ChatItem text={'hi'}/>
                    <ChatItem text={'hi'}/>
                    <ChatItem text={'hi'}/>
                    <ChatItem text={'hi'} isOwn/>
                </ChatWindowView>
                <ChatInput />
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

export default ChatLayout;

// function mapStateToProps(state) {
//     return {
//         form: state.form
//     };
// }
//
// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({
//         handleSubmit: ADD_USER
//     }, dispatch);
// }

//export default connect(mapStateToProps, matchDispatchToProps)(ChatLayout);
