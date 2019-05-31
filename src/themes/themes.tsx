import {DefaultTheme} from 'styled-components';
import {colors, media, font} from './variables';

const lightTheme: DefaultTheme = {
    colors: colors.light,
    font,
    media,
};

const darkTheme: DefaultTheme = {
    colors: colors.dark,
    font,
    media,
};

export {
    lightTheme,
    darkTheme
}