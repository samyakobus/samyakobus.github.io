// import { extendTheme } from '@chakra-ui/react'

// const theme = extendTheme({
//     fonts: {
//         heading: `'Inter', sans-serif`,
//         body: `'Inter', sans-serif`,
//     },
// })

// export default theme

import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/lato/700.css'
import '@fontsource-variable/fira-code'
import '@fontsource-variable/inter'

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        intialColorMode: "light",
        useSystemColorMode: false,
    },
    styles: {
        global: {
            body: {
                margin: 0,
                "font-family":
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",
            },

            code: {
                "font-family":
                    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
            },
        },
    },
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
        blueTheme: {
            1: "#041329",
        },
        theme1: {
            1: "#ecf1f5",
            2: "#BED1DF",
            3: "#8eabbf",
            4: "#000000",
        }

    },
    fonts: {
        heading: `'Open Sans', sans-serif`,
        heading2: `'inter', sans-serif`,
        body2: `'raleway', sans-serif`,
        body1: `'lato', sans-serif`,
        body: `'Fira Code Variable', monospace`,
    },
});

export default theme;