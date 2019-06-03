import React, {memo} from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    color: ${({theme: {colors: {secondary}}}) => secondary};
    margin-top: 0;
    text-align: center;
`;

const Header: React.FC<{title: string}> = ({title}) => {
    return <StyledH1>
        {title}
    </StyledH1>
};

export default memo(Header);