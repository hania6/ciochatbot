import React from 'react';
import styled from 'styled-components';
// Loading Modules

export default (props) => (
    <Container>
        <InputField {...props}/>
        <SubmitButton {...props}> Send </SubmitButton>
    </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  width: 97%;
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: row;
  margin-top: 20px;
  position: relative;
`;

const InputField = styled.input`
  border: none;
  border: 1px solid black;
  width: 80%;
  height: 2.5rem;
  padding: 10px;
  font-size: 1.5em;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  width: 20%;
  margin-left: 10px;
  font-size: 1.5rem;
  color: black;
`;
