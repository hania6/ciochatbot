import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Importing Action Creators
import { ADD_USER } from './formActions';

class Sample extends Component {
    render() {
        return (
          <div>
                <a href="#" onClick={this.handleSubmit}> Ho </a>
                <a href="#" onClick={this.handleSubmit}> Ho1 </a>
                <a href="#" onClick={this.handleSubmit}> Ho2 </a>
                <a href="#" onClick={this.handleSubmit}> Ho3 </a>
                <a href="#" onClick={this.handleSubmit}> Ho4 </a>
                <a href="#" onClick={this.handleSubmit}> Ho5 </a>
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

export default connect(mapStateToProps, matchDispatchToProps)(Sample);
