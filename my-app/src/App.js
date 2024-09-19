import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  useColorMode,
  Container,
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  useColorModeValue,
} from '@chakra-ui/react';
import LandingPage from './components/landingPage/LandingPage';
import Fonts from './fonts/fonts'
import theme from './theme/theme'

import ToggleColorMode from "./components/ToggleColorMode";
import NavBar from './components/navbar/navbar';
import Education from './components/education/education';
import Skills from './components/skills/skills';
import Projects from './components/skills/projects';
import Experience from './components/experience/experience';
import GetInTouch from './components/getintouch/getInTouch';


function App() {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();
  const primaryColor = colorMode === "dark" ? "gray.700" : "black";
  const secondaryColor = colorMode === "dark" ? "gray" : "gray";
  const bgColor = colorMode === "dark" ? "gray.700" : "white";

  const color = useColorModeValue('gray.800', 'white')

  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <NavBar />

        {/* <ToggleColorMode /> */}
        <Grid paddingTop={'10vw'} as="main">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <LandingPage />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <GetInTouch />

        </Grid>



      </ColorModeProvider>
    </ChakraProvider >
  );
}

export default App;
