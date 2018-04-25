import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Importing Chat Components
import { ThemeProvider, MessageList, Message, MessageText } from '@livechat/ui-kit';
// Importing Action Creators
import { ADD_USER } from './chatActions';

const theme = {
    vars: {
        'primary-color': '#427fe1',
        'secondary-color': '#fbfbfb',
        'tertiary-color': '#fff',
        'avatar-border-color': 'blue'
    },
    MessageList: {
        Avatar: {
            size: '42px'
        },
        css: {
            backgroundColor: '#F1F1F1',
            borderColor: 'black'
        }
    },
    Message: {
        css: {
            fontWeight: 'bold',
            fontSize: '1.5rem'
        }
    }
};

class ChatLayout extends Component {
    render() {
        return (
            <ThemeProvider theme={theme} >
                <MessageList>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Snow">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message isOwn authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                    <Message authorName="Jon">
                        <MessageText>Hello! I am Jon!</MessageText>
                    </Message>
                </MessageList>
            </ThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        form: state.form
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        handleSubmit: ADD_USER
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChatLayout);
