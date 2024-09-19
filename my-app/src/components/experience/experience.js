import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Container,
    Button,
    Center,
    Image,
    SimpleGrid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Flex,
    VStack,
    Text,
    UnorderedList,
    ListItem,

} from '@chakra-ui/react';

import theme from '../../theme/theme';



const Experience = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [count, setCount] = useState(0);
    const handle = (prop) => {
        setCount(prop);
        onOpen();
    };

    const workList = [{
        id: 0,
        imageUrl: '/images/experience/princeton.png',
        imageAlt: 'princeton',
        expCompany: 'SAP7A Property Group',
        expTitle: 'Engineering Intern',
        expList: ["Involved in the construction of Princeton Boutique Living, a 30 storey Apartment and Office development tower.",
            "Shadowed staff from the MEP (Mechanical, Engineering, and Plumbing) department",
            "Helped overseeing the installation of various utilities, such as septic tank, tower cranes, electrical cables, and lighting",
            "Learned various management tools, as well as Health and Safety practices."],
        expYear: 'July 2024 - August 2024'
    },
    {
        id: 1,
        imageUrl: '/images/experience/sllo.png',
        imageAlt: 'sllo',
        expCompany: 'PolyU Service Learning and Leadership Office',
        expTitle: 'Student Leader',
        expList: ["Spent three weeks in Rwanda to aid installation of LED and solar panels for 400 mud houses",
            "Lead and supervised groups of student in the service field, guiding and installing three LED bulb and solar panel system",
            "Helped mapped coordinates of houses onto a digital map with GPS points",
            "Assisted with packing multiple tools before the trip"
        ],
        expYear: 'July 2023 - August 2024'
    },
    {
        id: 2,
        imageUrl: '/images/experience/htt.png',
        imageAlt: 'htt',
        expCompany: 'High Tech Technology Limited',
        expTitle: 'Assistant Associate, Engineering',
        expList: ["Developed an Android mobile application that uses web sockets to communicate to IC power chip Suez to control voltage and current via I2C.",
            "Helped write firmware in C++ and PlatformIO to verify the functions of a 33-channel RGB driver chip, including controlling different light sequences, and controlling hardware output via SPI.",
            "Involved in the development of a firmware driver for USB Power Delivery Protocol for a Charger IC.",
            "Developed a motioned controlled remote control quadcopter using Microbit microcontroller for STEM Education. I employed the accelerometer and gyroscope of a Microbit. A user can use MakeCode to drag and drop blocks of code to change the parameters of the remote control.",
            "Helped guide 2 MSc students from the University of Hong Kong (HKU) with their Final Year Projects with the LED chip driver."],
        expYear: 'June 2021 - August 2022'
    },
    ]

    const workModal = [{
        id: 0,
        title: 'Engineering Intern',
        explanation: 'Some Pictures',
        experience: 'Pictures coming soon!',
        website: 'python.org'
    },
    {
        id: 1,
        title: 'Student Leader',
        explanation: 'Some Pictures',
        experience: 'Pictures coming soon!',
        website: 'python.org'
    },
    {
        id: 2,
        title: 'Assistant Associate, Engineering',
        explanation: 'Some Pictures',
        experience: 'Pictures coming soon!',
        website: 'python.org'
    },
    ]

    return (
        <ChakraProvider theme={theme}>
            <Container
                maxW='container.xxl'
                bgColor='#D7D7D980'
                pb={['3vw', '1vw']}
                px={['3vw', '5vw']}
                id='experience'
            >

                <Center>
                    <Center
                        minW={['75vw', '10vw']}
                        bgColor='blueTheme.1'
                        borderRadius={['75vw', '10vw']}
                        border='2px'
                        color='white'
                        padding='1vw'
                        margin='1vw'
                        fontWeight={'bold'}
                        borderColor={'white'}
                        marginTop={{ 'base': '5vh', 'sm': '4vh', 'md': '5vh', 'lg': '7vh', 'xl': '8vh' }}
                    >
                        Work Experience
                    </Center>
                </Center>
                <VStack>

                    {workList.map((property) => (
                        <Box minH='inherit' minW='76%' maxW='lg' borderWidth='2px' borderRadius='lg' bgColor='#FFFFFF' >
                            <Flex flexDirection={{ 'base': 'column', 'sm': 'column', 'md': 'row' }}>

                                <Box flexDirection={'column'} paddingLeft={{ 'base': '5px', 'sm': '7px', 'md': '10px' }} >
                                    <Box>
                                        <Center>
                                            <Image height={{ 'base': '70px', 'sm': '50px', 'md': '120px' }} mt={{ 'base': '4px', 'sm': '3px', 'md': '10px' }} src={property.imageUrl} alt={property.imageAlt} />
                                        </Center>
                                    </Box>
                                    <Center>
                                        <Box width={{ 'base': '50%', 'sm': '40%', 'md': '150px' }} >
                                            <Text fontWeight={'bold'} fontFamily={'body2'}>{property.expCompany}</Text>
                                        </Box>
                                    </Center>
                                </Box>

                                <Box p='3'>
                                    <Box flexDirection={'column'} width={{ 'base': '90%', 'sm': '80%', 'md': '350px', 'lg': '500px', 'xl': '700px' }}>
                                        <Box
                                            fontWeight='semibold'
                                            as='h4'
                                            lineHeight='tight'
                                            noOfLines={1}
                                            bgColor='blueTheme.1'
                                            borderRadius={['5px', '8px']}
                                        >
                                            <Button bgColor={'inherit'} onClick={() => handle(property.id)}>
                                                <Text color='white'>{property.expTitle}</Text>
                                            </Button>
                                        </Box>
                                        <Box>
                                            <Text>
                                                {property.expList.map((list) => (
                                                    <UnorderedList>
                                                        <ListItem>
                                                            {list}
                                                        </ListItem>
                                                    </UnorderedList>
                                                ))}
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Modal
                                        isCentered
                                        onClose={onClose}
                                        isOpen={isOpen}
                                        motionPreset='slideInBottom'
                                        blockScrollOnMount={true}
                                        bgColor='#FFFFFF'
                                    >
                                        <ModalOverlay
                                            bg='none'
                                            backdropFilter='blur(10px) '
                                            backdropInvert='80%'
                                            backdropBlur='2px' />
                                        <ModalContent>
                                            <ModalHeader>{workModal[parseInt(count)].title}</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                {workModal[parseInt(count)].experience}
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                    Close
                                                </Button>
                                                {/* <Button variant='ghost'>Secondary Action</Button> */}
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                                <Box pt={{ 'base': '1vh', 'sm': '2vh', 'md': '3vh', 'lg': '6vh', 'xl': '7vh' }} marginLeft={{ 'base': '10vh', 'sm': '20vh', 'md': '1.5vh', 'lg': '1.7vh', 'xl': '2vh' }} fontWeight='bold'>
                                    {property.expYear}
                                </Box>
                            </Flex>




                        </Box>


                    ))}

                </VStack>

            </Container >
        </ChakraProvider >
    );
}

export default Experience;
