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
  width: 40%;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  margin-bottom: 10px;
  position: relative;
`;

const InputField = styled.input`
  border: none;
  background-color: rgba(61,112,178,0.1);
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
