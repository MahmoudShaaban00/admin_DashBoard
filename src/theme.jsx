export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // light mode palette
                background: {
                    default: '#ffffff',
                    paper: '#ffffff',
                },
                text: {
                    primary: '#000000',
                    secondary: '#555555',
                },
            }
            : {
                // dark mode palette
                background: {
                    default: '#121212',
                    paper: '#424242',
                },
                text: {
                    primary: '#ffffff',
                    secondary: '#aaaaaa',
                },
            }),
    },
});