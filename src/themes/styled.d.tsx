import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            [name: string]: string,
        },
        font: {
            [name: string]: number,
        },
        media: {
            [name: string]: string,
        }
    }
}