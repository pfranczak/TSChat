import React, {useState, useContext} from 'react';
import './App.css';
// import ChatContainer from './components/ChatContainer';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';
import {lightTheme, darkTheme} from './themes/themes';
import {Store} from "./StoreContext";
import Input from './components/styled/Input';

const StyledWrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colors.main};
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .25);
    display: flex;
    flex-flow: column;
    height: 100vh;
    justify-content: center;
    width: 100vw;
    
    ${({theme: {media}}) => media.medium} {
        height: 400px;
        width: 600px;
    }
`;

const App: React.FC = () => {
    const [isLight, setIsLight] = useState<boolean>(true);

    const changeTheme = (): void => {
        setIsLight(prev => !prev);
    };

    const {state, dispatch} = useContext(Store);

    return (
        <div className="App">
            <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
                <StyledWrapper>
                    {/*<InputWrapper*/}
                        {/*onChange={(e) => dispatch({type: 'SET_USERNAME', payload: e.target.value})}*/}
                        {/*width={200}*/}
                    {/*/>*/}
                    <Input label="Login"/>
                    Twoja Nazwa: {state.username}
                </StyledWrapper>
            </ThemeProvider>
            {/*<button onClick={changeTheme}>Zmień skórkę</button>*/}
        </div>
    );
};

export default App;
