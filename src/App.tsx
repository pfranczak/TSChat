import React, {useState, useContext} from 'react';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';
import {lightTheme, darkTheme} from './themes/themes';
import {Store} from './StoreContext';
import './App.css';
import LoginContainer from './components/LoginContainer';
import ChatContainer from './components/Chat/ChatContainer';

const StyledWrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colors.main};
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .25);
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    justify-content: center;
    width: 100vw;
    
    ${({theme: {media}}) => media.medium} {
        height: 70vh;
        width: 70vw;
    }
`;

const App: React.FC = () => {
    const [isLight, setIsLight] = useState<boolean>(true);
    const {state, dispatch} = useContext(Store);

    const changeTheme = (): void => {
        setIsLight(prev => !prev);
    };

    return (
        <div className="App">
            <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
                <StyledWrapper>
                    {state.isLogged
                        ? <ChatContainer />
                        : <LoginContainer/>
                    }
                </StyledWrapper>
            </ThemeProvider>
            {/*<button onClick={changeTheme}>Zmień skórkę</button>*/}
        </div>
    );
};

export default App;
