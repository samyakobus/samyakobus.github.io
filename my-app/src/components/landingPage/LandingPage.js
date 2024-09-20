import React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Container,
    Flex,
    Stack,
    Button,
    useColorMode,
    Center,
    Image,
    Link,

} from '@chakra-ui/react';

import { Link as Linking } from "react-scroll";
import {
    ViewIcon,
    ArrowForwardIcon,
} from '@chakra-ui/icons'

const LandingPage = () => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
    const { colorMode, toggleColorMode } = useColorMode();
    const primaryColor = colorMode === "dark" ? "white" : "black";
    const secondaryColor = colorMode === "dark" ? "gray" : "gray";
    const bgColor = colorMode === "dark" ? "gray.400" : "white";

    return (
        <Container
            maxW='container.xl'
            // bg='pink'
            color='#262626'
            id='samyak'
            scrollBehavior={'smooth'}
            zIndex={'8000'}
        >
            <Flex paddingTop={{ 'sm': '5vh', 'md': '9vh' }} mb={{ 'sm': '5vh', 'md': '9vh' }} color='white' minHeight='100%' bgColor={bgColor} flexDirection={{ 'base': 'column', 'sm': 'column', 'md': 'row' }}>
                <Box
                    flex='1'
                    // bg='white' 
                    minHeight='7vh'
                    justifyContent={'end'}
                    mb={{ 'base': '7vh', 'sm': '5vh', 'md': '9vh' }}
                    ml={{ 'base': '3vh', 'sm': '5vh', 'md': '9vh' }}>

                    <Text
                        color={secondaryColor}
                        lineHeight={{ 'sm': '8vh', 'md': '12vh', 'lg': '12vh' }}
                        align='initial'
                        fontSize={{ 'base': '50px', 'sm': '60px', 'md': '70px' }}
                        fontWeight='bold'
                        textShadow='2px 2px #AAAAAA80'
                    //bgColor={'blue'}
                    >
                        I am
                    </Text>
                    <Text
                        color={primaryColor}
                        lineHeight={{ 'sm': '7vh', 'md': '7vh' }}
                        align='initial' fontSize={{ 'base': '50px', 'sm': '60px', 'md': '70px' }}
                        fontWeight={700}
                        textShadow='2px 2px #BBBBBB90'

                    //bgColor='green.200'
                    >
                        Samuel YAKOBUS
                    </Text>
                    <Stack direction='row' justify={'center'} spacing={{ 'sm': '7vh', 'md': '8vh' }} paddingTop={{ 'base': '5vh', 'sm': '12vh', 'md': '15vh' }}>
                        {/* <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
                            My/CV Resume
                        </Button>

                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                            Get in touch
                        </Button> */}
                        <Box
                            as='button'
                            height={['45px', '50px', '60px', '70px']}
                            lineHeight='1.2'
                            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            border='1px'
                            px='8px'
                            borderRadius='2px'
                            fontSize='25px'
                            fontWeight='semibold'
                            bg='#041329'
                            borderColor='#ccd0d5'
                            color='#ffffff'
                            _hover={{ bg: '#ebedf0' }}
                            _active={{
                                bg: '#dddfe2',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                            }}
                            _focus={{
                                boxShadow:
                                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                            }}
                        >

                            <Link
                                href="https://drive.google.com/file/d/187ybx0L3cqzj3QMBDq2cLzi_A8m0FBTv/view?usp=sharing" isExternal
                                duration={500} >
                                <ViewIcon />
                                <Text fontSize={['16px', '20px', '25px', '35px']}
                                    paddingLeft={['5px', '6px', '7px', '10px']} display='inline'>My Resume</Text></Link>


                        </Box>

                        <Box
                            as='button'
                            height={['45px', '50px', '60px', '70px']}
                            lineHeight='1.2'
                            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            border='1px'
                            px='8px'
                            borderRadius='2px'
                            fontSize='25px'
                            fontWeight='semibold'
                            bg='#041329'
                            borderColor='#ccd0d5'
                            color='#ffffff'
                            _hover={{ bg: '#ebedf0' }}
                            _active={{
                                bg: '#dddfe2',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                            }}
                            _focus={{
                                boxShadow:
                                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                            }}
                        >
                            <Linking
                                activeClass="active"
                                to="getintouch"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}

                            >  <Text fontSize={['16px', '20px', '25px', '35px']} paddingLeft={['5px', '6px', '7px', '10px']} display='inline'>Get in touch</Text> <ArrowForwardIcon /></Linking>


                        </Box>
                    </Stack>

                </Box>
                <Box flex='1' >
                    <Center>
                        <Image maxWidth={{ 'base': '30vh', 'sm': '50vh', 'md': '100vh' }} boxShadow='12px 12px 2px 1px rgba(4, 19, 41, 1)' src={'/images/langdingPage.png'} alt="Samuel" />
                    </Center>
                </Box>
            </Flex>
        </Container >

    );
}

export default LandingPage;
