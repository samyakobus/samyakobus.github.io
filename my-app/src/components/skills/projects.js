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
    Text,
    Flex,
    Link

} from '@chakra-ui/react';
import theme from '../../theme/theme';


const Projects = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [count, setCount] = useState(0);
    const handle = (prop) => {
        setCount(prop);
        onOpen();
    };

    const projectList = [{
        id: 0,
        imageUrl: '/images/projects/ECAPA_TDNN.png',
        imageAlt: 'ECAPA-TDNN',
        projTitle: 'ECAPA-TDNN (Final Year Project)',
        projBlurb: 'ECAPA-TDNN (Emphasized Channel Attention, Propagation, and Aggregation in Time Delay Neural Network) is used for Sound Event Detection for my Final Year Project. It achieved an accuracy of 86%.',
    },
    {
        id: 1,
        imageUrl: '/images/projects/LED.png',
        imageAlt: 'HT1388 LED Driver Testing Board',
        projTitle: 'HT1388 LED Driver Testing Board',
        projBlurb: 'Designed the PCB (Printed Circuit Board) and wrote program for microcontroller to test the functionality of the HT1388 LED driver chip. It used a custom SPI protocol.',
    },
    {
        id: 2,
        imageUrl: '/images/projects/microbit.png',
        imageAlt: 'Microbit Drone Remote Control',
        projTitle: 'Microbit Drone Remote Control',
        projBlurb: 'Developed a motion-controlled remote control that is able to gather pitch, roll, and yaw inputs. It is able to control a UAV and fly it accordingly. The project used MicroBit and was intended for STEM education.',
    },
    {
        id: 3,
        imageUrl: '/images/projects/CAR.png',
        imageAlt: 'Robot Car for PID Control',
        projTitle: 'Robot Car for PID Control',
        projBlurb: 'Programmed and assembled a robotic car with two motors. The car was programmed in the STM32 framework in C. Part of EIE3105 (Integrated Project at PolyU).',
    },
    {
        id: 4,
        imageUrl: '/images/projects/IOT.png',
        imageAlt: 'IOT Android App',
        projTitle: 'IOT Android App',
        projBlurb: 'Created an Android Application with Android studio that was able to communicate with an ESP8266. This Android application was able to control a power chip that controls the current and voltage outputs.',
    },
    {
        id: 5,
        imageUrl: '/images/projects/web.png',
        imageAlt: 'This Website',
        projTitle: 'This Website',
        projBlurb: 'This website was made with ReactJS and the Chakra UI library. I created this website as a showcase of past achievements and future aspirations as an individual.',
    },
    ]

    const projectModal = [{
        id: 0,
        imageUrl: '/images/projects/ECAPA_TDNN.png',
        imageAlt: 'ECAPA-TDNN',
        projModalTitle: 'ECAPA-TDNN',
        projModalBlurb: 'ECAPA-TDNN (Emphasized Channel Attention, Propagation, and Aggregation in Time Delay Neural Network) was used for sound event detection. I used data from the UrbanSound8k dataset with 8,732 entries. I used python to train and test this program on Google Colab. I received a grade of \'A\' for this course. ',
        projLink: 'https://youtu.be/C_P3duc9ce4',
        secondaryAction: 'Watch Video'
    },
    {
        id: 1,
        imageUrl: '/images/projects/LED.png',
        imageAlt: 'HT1388 LED Driver Testing Board',
        projModalTitle: 'HT1388 LED Driver Testing Board',
        projModalBlurb: 'I was involved in the process of developing the testing demonstration of the HT1388 IC chip. ',
        projLink: 'https://www.youtube.com/watch?v=_DuMSceqlWU',
        secondaryAction: 'Watch Video',
    },
    {
        id: 2,
        imageUrl: '/images/projects/microbit.png',
        imageAlt: 'Microbit Drone Remote Control',
        projModalTitle: 'Microbit Drone Remote Control',
        projModalBlurb: 'Microbit Drone Remote Control was initally created for STEM education for secondary school students. An interface program with drag-and-drop programming was part of the next plan where students can change certain parameters such as the sensitivity of the drone. The drone has yaw, pitch, and roll functionality which was gathered from the accelerometer infromation on the controlling microbit.',
        projLink: 'https://youtu.be/wNNBP6SFDu0',
        secondaryAction: 'Watch Video',
    },
    {
        id: 3,
        imageUrl: '/images/projects/CAR.png',
        imageAlt: 'Robot Car for PID Control',
        projModalTitle: 'Robot Car for PID Control',
        projModalBlurb: 'This robot car programming was a part of the course of EIE3105 at The Hongkong Polytechnic University. Control systems was used to control the behavior during turns.',
        projLink: 'https://youtu.be/fthP2iRb_BM',
        secondaryAction: 'Watch Video',
    },
    {
        id: 4,
        imageUrl: '/images/projects/IOT.png',
        imageAlt: 'IOT Android App',
        projModalTitle: 'IOT Android App',
        projModalBlurb: 'The IOT app was created with Android Studio in Java. It is a simple appplication that enables the connection between an Android smartphone to a ESP8266 wifi enabled microcontroller. ',
        projLink: 'https://youtu.be/bTMx-NUXvXE',
        secondaryAction: 'Watch Video',
    },
    {
        id: 5,
        imageUrl: '/images/projects/web.png',
        imageAlt: 'This Website',
        projModalTitle: 'This Website',
        projModalBlurb: 'This website was made with ReactJS and the Chakra UI library',
        projLink: 'https://www.linkedin.com/in/samuel-yakobus-b8620a191',
        secondaryAction: 'Go to my LinkedIn',
    },
    ]

    return (
        <ChakraProvider theme={theme}>
            <Container
                maxW='container.xl'
                bgColor='inherit'
                pb={['3vw', '1vw']}
                px={['3vw', '5vw']}
                id='projects'
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
                    >
                        Projects
                    </Center>
                </Center>
                <SimpleGrid columns={[1, 2, 3]} spacing='10px' >
                    {projectList.map((property) => (
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bgColor='#EEEEEE80'>
                            <Center>
                                <Image height={{ 'base': '70px', 'sm': '50px', 'md': '100px' }} mt={{ 'base': '4px', 'sm': '3px', 'md': '10px' }} paddingLeft={{ 'base': '4px', 'sm': '3px', 'md': '10px' }} src={property.imageUrl} alt={property.imageAlt} />
                            </Center>
                            <Box p='3'>
                                <Center>

                                    <Box
                                        mt='1'
                                        fontWeight='semibold'
                                        as='h4'
                                        lineHeight='tight'
                                        noOfLines={1}
                                    >
                                        <Button bgColor={'inherit'} whiteSpace="normal" height="auto" blockSize="auto" onClick={() => handle(property.id)}>

                                            <Text padding={2}>{property.projTitle}</Text>

                                        </Button>

                                    </Box>


                                </Center>
                                <Box>
                                    <Text>{property.projBlurb}</Text>
                                </Box>
                                <Modal
                                    isCentered
                                    onClose={onClose}
                                    isOpen={isOpen}
                                    motionPreset='slideInBottom'
                                    blockScrollOnMount={true}
                                >
                                    <ModalOverlay
                                        bg='none'
                                        backdropFilter='blur(10px) '
                                        backdropInvert='80%'
                                        backdropBlur='2px' />
                                    <ModalContent>
                                        <ModalHeader>{projectModal[parseInt(count)].projModalTitle}</ModalHeader>
                                        <Flex>
                                            <Center>
                                                <Image paddingLeft={{ 'base': '4px', 'sm': '3px', 'md': '10px' }} height={{ 'base': '70px', 'sm': '70px', 'md': '100px' }} mt={{ 'base': '4px', 'sm': '3px', 'md': '10px' }} src={projectModal[parseInt(count)].imageUrl} alt={projectModal[parseInt(count)].imageAlt} />
                                            </Center>
                                            <ModalBody>
                                                {projectModal[parseInt(count)].projModalBlurb}
                                            </ModalBody>
                                        </Flex>

                                        <ModalCloseButton />

                                        <ModalFooter>
                                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                Close
                                            </Button>
                                            <Button variant='ghost'><Link href={projectModal[parseInt(count)].projLink} isExternal>
                                                {projectModal[parseInt(count)].secondaryAction}
                                            </Link></Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>


                            </Box>

                        </Box>


                    ))}

                </SimpleGrid>

            </Container >
        </ChakraProvider >
    );
}

export default Projects;
