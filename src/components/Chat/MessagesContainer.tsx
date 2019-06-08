import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMessagesList = styled.div`
    border-radius: 0 7px 7px 0;
    flex: 3;
    height: 100%;
`;

const MessagesContainer: React.FC = props => {
    return (
        <StyledMessagesList>
        </StyledMessagesList>
    );
};

MessagesContainer.propTypes = {};

export default MessagesContainer;