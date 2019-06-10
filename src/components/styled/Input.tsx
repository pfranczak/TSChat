import React, {useState, memo} from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div<{ isTouched: boolean, width: number}>`
    border: 1px solid ${({isTouched, theme: {colors: {input, secondary}}}) => isTouched ? secondary : input};
    border-radius: 5px;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    
    ${({theme: {media}}) => media.medium} {
        width: ${({width}) => width + 'px' || '100%'}
    }
`;

const StyledInput = styled.input`
    background: inherit;
    border: none;
    font-family: inherit;
    font-size: 1em;
    padding: 10px 10px;

    :focus {
        outline: none;
    }
`;

const StyledLabel = styled.label<{ isTouched: boolean}>`
    color: ${({isTouched, theme: {colors: {input, secondary}}}) => isTouched ? secondary : input};
    background-color: ${props => props.theme.colors.main};
    left: 2px;
    padding: 0 5px;
    position: absolute;
    top: 10px;
    ${({isTouched}) => isTouched && 
    'transform: translateY(-21px) scale(.9);' +
    'transition: transform .2s'}
`;

interface InputProps {
    label: string | number,
    defaultValue?: string | number,
    width: number,

    onChange?(value: string | number): string | number | void,

    onBlur?(): string | number,
}

const Input: React.FC<InputProps> = ({label, defaultValue, onChange, onBlur, ...props}) => {
    const [isTouched, setIsTouched] = useState(false);
    return (
        <InputWrapper
            isTouched={isTouched}
            width={props.width}
        >
            <StyledLabel
                isTouched={isTouched}
            >
                {label}
            </StyledLabel>
            <StyledInput
                onFocus={() => setIsTouched(true)}
                onChange={({target: {value}}) => onChange && onChange(value)}
                onBlur={() => onBlur && onBlur()}
            />
        </InputWrapper>
    );
};

export default memo(Input);