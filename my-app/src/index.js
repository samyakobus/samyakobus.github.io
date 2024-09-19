import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme/theme";


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <>
    {/* 👇 Here's the script */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
)