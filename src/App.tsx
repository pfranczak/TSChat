import React, {useState, useContext} from 'react';
import './App.css';
// import ChatContainer from './components/ChatContainer';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';
import {lightTheme, darkTheme} from './themes/themes';
import sizes from './themes/variables';
import {Store} from "./StoreContext";
import InputWrapper from "./components/styled/Input";

const StyledWrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.main};
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .25);
    display: flex;
    flex-flow: column;
    height: 100vh;
    justify-content: center;
    width: 100vw;
    
    @media (min-width: ${sizes.medium}px) {
        height: 400px;
        width: 600px;
    }
`;

const App: React.FC = () => {
    const [isLight, setIsLight] = useState<boolean>(true);
    // const [username, dispatch] = useReducer(reducer, '');

    const changeTheme = (): void => {
        setIsLight(prev => !prev);
    };

    const {state, dispatch} = useContext(Store);

    return (
        <div className="App">
            <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
                <StyledWrapper>
                    <label>dupka</label>
                    <InputWrapper
                        onChange={(e) => dispatch({type: 'SET_USERNAME', payload: e.target.value})}
                        width={200}
                    />
                    Twoja Nazwa: {state.username}
                </StyledWrapper>
            </ThemeProvider>
            {/*<button onClick={changeTheme}>Zmień skórkę</button>*/}
        </div>
    );
};

export default App;
