import styled from 'styled-components';

const StyledArrow = styled.i<{size: number, direction: string}>`
    border: solid ${({theme: {colors: {secondary}}}) => secondary};
    border-width: ${({size}) => `0 ${size}px ${size}px 0`};
    display: inline-block;
    padding: ${({size}) => size}px;
    transform: rotate(${({direction}) => {
        switch(direction) {
            case 'up':
                return '-135';
            case 'right' :
                return '-45';
            case 'down':
                return '45';
            case 'left' :
                return '135';
        }}}deg);
`;

export default StyledArrow;