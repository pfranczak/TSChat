import React, {useState, useCallback, Fragment} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MAX_MESSAGE_LENGTH = 300;

const StyledTextarea = styled.textarea`
    border-radius: 7px;
    box-sizing: border-box;
    font-family: inherit;
    font-size: .9em;
    height: 75px;
    line-height: 1.5;
    padding: 10px;
    resize: none;
    width: 100%;
    
    :focus {
        outline: none;
    }
`;

const StyledCharContainer = styled.div`
    bottom: 10px;
    font-size: .9em;
    position: absolute;
    right: 10px;
`;

const StyledInputContainer = styled.div`
    position: relative;
    width: 95%;
`;

const TextArea: React.FC = props => {
    const [chars, setChars] = useState<number>(0);

    const onChangeHandler = useCallback(({target: {value}}) => {
        setChars(value.length);
    }, []);

    return (
        <StyledInputContainer>
            <StyledTextarea
                placeholder="Enter your message"
                maxLength={MAX_MESSAGE_LENGTH}
                onChange={onChangeHandler}
            />
            <StyledCharContainer>
                {chars}/300
            </StyledCharContainer>
        </StyledInputContainer>
    );
};

TextArea.propTypes = {};

export default TextArea;