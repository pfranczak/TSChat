import React, {useState} from 'react';
import './App.css';
// import ChatContainer from './components/ChatContainer';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';
import {lightTheme, darkTheme} from './themes/themes';

const StyledContainer = styled.div`
    background-color: ${props => props.theme.color.main};
    height: 200px;
    width: 120px;
`;

const App: React.FC = () => {
    const [isLight, setIsLight] = useState(true);

    const changeTheme = () => {
        setIsLight(prev => !prev);
    };

    return (
        <div className="App">
            <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
                <StyledContainer />
            </ThemeProvider>
            <button onClick={changeTheme}>Zmień skórkę</button>
        </div>
    );
};

export default App;
