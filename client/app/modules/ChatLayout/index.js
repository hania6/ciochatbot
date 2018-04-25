import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Importing Chat Components
import { MessageBox, ChatItem, Input, Button } from "react-chat-elements";
// Importing Action Creators
import { ADD_USER } from "./chatActions";

class ChatLayout extends Component {
  render() {
    return (
      <div>
        <MessageBox>
          <ChatItem
            title={"Facebook"}
            subtitle={"What are you doing?"}
            date={new Date()}
            unread={0}
          />
        </MessageBox>
        <Input
          placeholder="Type here..."
          buttons={
            <Button color="white" backgroundColor="black" text="Send" />
          }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleSubmit: ADD_USER
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(ChatLayout);
