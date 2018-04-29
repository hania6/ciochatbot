import React from 'react';
import styled from 'styled-components';
// Loading Modules

export default (props) => (
    <Container {...props} />
);

const Container = styled.div`
    width: 95%;
    height: 90vh;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
