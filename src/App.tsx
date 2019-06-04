import React, {useState, useContext} from 'react';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';
import {lightTheme, darkTheme} from './themes/themes';
import {Store} from './StoreContext';
import './App.css';
import LoginContainer from './components/LoginContainer';

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
        height: 400px;
        padding: 0 125px;
        width: 600px;
    }
`;

const App: React.FC = () => {
    const [isLight, setIsLight] = useState<boolean>(true);

    const changeTheme = (): void => {
        setIsLight(prev => !prev);
    };

    const {state, dispatch} = useContext(Store);
    console.log(state);
    return (
        <div className="App">
            <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
                <StyledWrapper>
                    {state.isLogged
                        ? <div>DUPA</div>
                        : <LoginContainer/>
                    }
                </StyledWrapper>
            </ThemeProvider>
            {/*<button onClick={changeTheme}>Zmień skórkę</button>*/}
        </div>
    );
};

export default App;
