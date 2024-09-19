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
    boxShadow,

} from '@chakra-ui/react';
import Fonts from '../../fonts/fonts';
import theme from '../../theme/theme';


const Education = () => {

    return (
        <ChakraProvider theme={theme}>
            <Container
                maxW='container.xxl'
                bgColor='#D7D7D980'
                mt={['6vw', '1vw']}
                pb={['1vw', '1vw']}
                px={['3vw', '5vw']}
                id='about'
            >
                <Center>
                    <Center
                        minW={['75vw', '10vw']}
                        bgColor='blueTheme.1'
                        borderRadius={['75vw', '10vw']}
                        color='white'
                        padding='1vw'
                        margin='1vw'
                        fontFamily='heading2'
                        fontWeight={'bold'}>
                        About Me
                    </Center>

                </Center>

                <Flex mb={{ 'base': '1.5vh', 'sm': '2vh', 'md': '2vh' }} flexDirection={{ 'base': 'column', 'sm': 'column', 'md': 'row' }}>
                    <Box
                        flex='1.5'
                        mb={{ 'sm': '7vh', 'md': '3vh' }}
                    >
                        <Stack>
                            <Text>
                                Hi I am Samuel! I am currently a postgraduate student studying Actuarial Science and Insurance Analytics. I am interested in pursuing a career in finance,
                                yet also still find interest in the world of engineering.
                            </Text>

                            <br />
                            <Text bgColor='theme1.2'>
                                In my free time, I like to tinker with Web Development, Python Programming, and reading current world news. Some of the news outlets I follow are:
                                the WSJ.com, NYT.com, SCMP, and Finimize.
                            </Text>
                            <br />
                            <Box display='inline-block'>
                                <Text display='inline-block' fontWeight='bold' pr='3px'>
                                    Hobbies:
                                </Text>
                                seeing the world, tinkering, music, coffee, making the world a profitable place

                            </Box>

                            <Text fontWeight={'bold'}>
                                Education:
                            </Text>
                            <Center>
                                <Image maxWidth={{ 'base': '20vh', 'sm': '30vh', 'md': '50vh' }} src={'/images/education/cuhkLogo.png'} alt="CUHK" />
                            </Center>
                            <Center>
                                <Box display='inline-block'>
                                    <Text display='inline-block' fontWeight='bold' pr='3px'>
                                        Degree:
                                    </Text>
                                    MSc in Actuarial Science and Insurance Analytics
                                </Box>
                            </Center>
                            <Center>
                                <Text>Expected Graduation: 2025 </Text>
                            </Center>
                            <Center>
                                <Text>@HKD198,000 BOC-HK Scholarship </Text>
                            </Center>

                            <Center>
                                <Image marginLeft='5px' maxWidth={{ 'base': '18vh', 'sm': '22vh', 'md': '35vh' }} src={'/images/education/polyuLogo.png'} alt="PolyU" />
                            </Center>
                            <Center>
                                <Box display='inline-block'>
                                    <Text display='inline-block' fontWeight='bold' pr='3px'>
                                        Degree:
                                    </Text>
                                    BEng in Electronic and Information Engineering
                                </Box>
                            </Center>
                            <Center>
                                <Text>Graduation Year: 2024 </Text>
                            </Center>
                            <Center>
                                <Text>@HKD190,000 Entry Scholarship Annually </Text>
                            </Center>



                            <Text>
                                Last Updated: 29 August 2024
                            </Text>



                        </Stack>

                    </Box>
                    <Box
                        flex='1'
                        mb={{ 'base': '7vh', 'sm': '5vh', 'md': '9vh' }}
                    >
                        <Center

                        >
                            <Image maxWidth={{ 'base': '30vh', 'sm': '50vh', 'md': '100vh' }} src={'/images/education.png'} alt="Samuel" />
                        </Center>

                    </Box>

                </Flex>

            </Container >
        </ChakraProvider >
    );
}

export default Education;
