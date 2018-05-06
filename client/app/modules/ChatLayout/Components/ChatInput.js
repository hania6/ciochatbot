import React from 'react';
import styled from 'styled-components';
// Loading Modules

export default (props) => (
    <Container>
        <InputField value={props.msg} onChange={props.onMsgUpdate} onKeyPress={props.onEnterClick} autofocus/>
        <SubmitButton onClick={props.onSendClick}> Send </SubmitButton>
    </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  width: 97%;
  height: 100%;
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 5px;
  position: relative;
`;

const InputField = styled.input`
  border: none;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.6);
  width: 80%;
  height: 2.5rem;
  padding: 10px;
  font-size: 1.5em;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: rgba(61,112,178);
  width: 20%;
  margin-left: 10px;
  font-size: 1.5rem;
  color: white;
`;
