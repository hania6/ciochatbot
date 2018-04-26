import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Importing Chat Components
// Importing Action Creators
import { ADD_USER } from './chatActions';


class ChatLayout extends Component {
    render() {
        return (
            <div>
              asdas
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
    return bindActionCreators({
        handleSubmit: ADD_USER
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChatLayout);
