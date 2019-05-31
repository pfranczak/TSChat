import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    width: ${({width}) => width}px;
`;

export default InputWrapper;