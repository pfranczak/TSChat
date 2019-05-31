import React, {useState} from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    border: 2px solid #ff0000;
    border-radius: 5px;
    padding: 10px 20px;
    position: relative;
`;

const StyledInput = styled.input`
`;

const StyledLabel = styled.label`
    position: absolute;
`;

interface InputProps {
    label: string | number,
    defaultValue?: string | number,

    onChange?(value: string | number): string | number,

    onBlur?(): string | number,
}

const Input: React.FC<InputProps> = ({label, defaultValue, onChange, onBlur, ...props}) => {
    const [isTouched, setIsTouched] = useState(false);
    return (
        <InputWrapper>
            <StyledLabel>
                {label}
            </StyledLabel>
            <StyledInput
                onFocus={() => setIsTouched((prev) => !prev)}
            />
        </InputWrapper>
    );
};

export default Input;