import React, {memo} from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${({theme: {colors: {secondary}}}) => secondary};
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    color: ${({theme: {colors: {main}}}) => main};
    cursor: pointer;
    margin: 10px 0;
    padding: 10px 20px;
    text-transform: uppercase;
`;

interface ButtonProps {
    children: string,

    onClick(): void,
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <StyledButton
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
};

export default memo(Button);