import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Container,
    Button,
    Center,
    Image,
    Flex,
    VStack,
    Text,
    useClipboard,
    Link,

} from '@chakra-ui/react';

import theme from '../../theme/theme';



const GetInTouch = () => {
    const [value, setValue] = React.useState('samuelyakobuswork@gmail.com')
    const { hasCopied, onCopy } = useClipboard(value)

    return (
        <ChakraProvider theme={theme}>
            <Container
                maxW='container.xxl'
                bgColor='#ffffff'
                pb={['3vw', '1vw']}
                px={['3vw', '5vw']}
                id='getintouch'
            >

                <Center>
                    <Center
                        minW={['75vw', '10vw']}
                        bgColor='white'
                        borderRadius={['75vw', '10vw']}
                        border='2px'
                        color='Black'
                        padding='1vw'
                        margin='1vw'
                        fontWeight={'bold'}
                        fontFamily={'heading2'}
                    >
                        Get in Touch
                    </Center>
                </Center>
                <Center>
                    <Box>
                        <Text fontFamily={'heading2'} fontSize={['30px', '35px', '40px', '50px']}>Let's get in touch!</Text>
                    </Box>
                </Center>
                <Center>
                    <Text>
                        Feel free to reach out to me if you're looking for talent, or simply want to connect. I am quite approachable.
                        <br />
                        <Center>
                            This is my email:
                        </Center>
                    </Text>
                </Center>
                <Center>
                    <Flex mb={2}>
                        <Box marginRight='8px' marginTop='8px'>
                            <Text fontFamily={'body1'}>
                                samuelyakobuswork@gmail.com
                            </Text>

                        </Box>
                        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
                    </Flex>
                </Center>
                <Center>
                    <Text>
                        I am also available through these other channels:
                    </Text>
                </Center>
                <VStack>
                    <Link href='https://www.linkedin.com/in/samuel-yakobus-b8620a191' isExternal>
                        LinkedIn  <Image maxWidth={{ 'base': '3vh', 'sm': '5vh', 'md': '10vh' }} src={'/images/contact/linkedin.png'} alt="Samuel"></Image>
                    </Link>
                </VStack>
                <Center>
                        <Image marginTop={{ 'base': '5vh', 'sm': '10vh', 'md': '5vh' }} marginLeft={{ 'base': '5vh', 'sm': '10vh', 'md': '5vh' }} maxWidth={{ 'base': '25vh', 'sm': '25vh', 'md': '50vh' }} boxShadow='12px 12px 2px 1px rgba(4, 19, 41, 1)' src={'/images/landing/sam.png'} alt="Sam" />
                </Center>
                <Box height={['160px']}>
                </Box>
               

            </Container >
        </ChakraProvider >
    );
}

export default GetInTouch;
