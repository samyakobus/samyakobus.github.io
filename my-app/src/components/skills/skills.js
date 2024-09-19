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
    Link,
    Text,
} from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';
import theme from '../../theme/theme';



const Skills = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [count, setCount] = useState(0);
    const handle = (prop) => {
        setCount(prop);
        onOpen();
    };

    const skillList = [{
        id: 0,
        imageUrl: '/images/skills/upython.png',
        imageAlt: 'MicroPython Image',
        skillsText: 'MicroPython'
    },
    {
        id: 1,
        imageUrl: '/images/skills/arduino.png',
        imageAlt: 'Arduino Logo',
        skillsText: 'Arduino'
    },
    {
        id: 2,
        imageUrl: '/images/skills/python.png',
        imageAlt: 'Python Logo',
        skillsText: 'Python'
    },
    {
        id: 3,
        imageUrl: '/images/skills/javascript.png',
        imageAlt: 'JavaScript',
        skillsText: 'JavaScript'
    },
    {
        id: 4,
        imageUrl: '/images/skills/c++.svg',
        imageAlt: 'C++',
        skillsText: 'C++'
    },
    {
        id: 5,
        imageUrl: '/images/skills/chakraui.png',
        imageAlt: 'Chakra UI',
        skillsText: 'Chakra UI'
    },
    {
        id: 6,
        imageUrl: '/images/skills/git.png',
        imageAlt: 'Git',
        skillsText: 'Git'
    },
    {
        id: 7,
        imageUrl: '/images/skills/multilingual.png',
        imageAlt: 'Multilingual',
        skillsText: 'Multilingual'
    },
    {
        id: 8,
        imageUrl: '/images/skills/stm32.png',
        imageAlt: 'STM32',
        skillsText: 'STM32 Development'
    },
    {
        id: 9,
        imageUrl: '/images/skills/office.png',
        imageAlt: 'Microsoft Office',
        skillsText: 'Word, Excel, PowerPoint'
    },
    {
        id: 10,
        imageUrl: '/images/skills/figma.svg',
        imageAlt: 'Figma',
        skillsText: 'Figma'
    },
    {
        id: 11,
        imageUrl: '/images/skills/leadership.jpg',
        imageAlt: 'Microsoft Office',
        skillsText: 'Leadership'
    },
    ]

    const skillsModal = [{
        id: 0,
        title: 'MicroPython',
        explanation: 'MicroPython is an implementation of Python 3 that can be used in hardware development.',
        experience: 'Microbit',
        secondaryAction: 'Website',
        website: 'https://micropython.org/'
    },
    {
        id: 1,
        title: 'Arduino',
        explanation: 'Arduino is a ecosystem of various microcontrollers that are based on Atmel. The programming language is a variation of C/C++.',
        experience: 'LED Testing Board, Various DIY Projects',
        secondaryAction: 'Website',
        website: 'https://www.arduino.cc/'
    },
    {
        id: 2,
        title: 'Python',
        explanation: 'Python is a popular programming language used in modern day data processing and web development.',
        experience: 'ECAPA-TDNN FYP, Personal Projects, Etc.',
        secondaryAction: 'Website',
        website: 'https://python.org'
    },
    {
        id: 3,
        title: 'JavaScript',
        explanation: 'More into React, which is a popular framework for web building.',
        experience: 'This website, HMCC Hong Kong About Us Page',
        secondaryAction: 'Website',
        website: 'https://react.dev/'
    },
    {
        id: 4,
        title: 'C++',
        explanation: 'C++ is used for various embedded system projects.',
        experience: 'Personal Projects, HTT Intern, ENG2002 Course PolyU',
        secondaryAction: 'Website',
        website: 'https://isocpp.org/'
    },
    {
        id: 5,
        title: 'Chakra UI',
        explanation: 'Chakra UI is a simple, modular and accessible component library ',
        experience: 'This website.',
        secondaryAction: 'Website',
        website: 'https://v2.chakra-ui.com/'
    },
    {
        id: 6,
        title: 'Git',
        explanation: 'Git is a version control system used globally.',
        experience: 'Various programming uses',
        secondaryAction: 'Website',
        website: 'https://git-scm.com/'
    },
    {
        id: 7,
        title: 'Multilingual',
        explanation: 'I am able to communicate fluently in English and Indonesian. I have conversational Mandarin at HSK 4 Level.',
        experience: 'Academia, Work, and Daily Life',
        secondaryAction: 'Wikipedia?',
        website: 'https://en.wikipedia.org/wiki/Multilingualism'
    },
    {
        id: 8,
        title: 'STM32 Development',
        explanation: 'STM32 is a microcontroller architecture used extensively in hardware development.',
        experience: 'Robot Car, A Robot Trolley',
        secondaryAction: 'Website',
        website: 'https://www.st.com/content/st_com/en.html'
    },
    {
        id: 9,
        title: 'Microsoft Office',
        explanation: 'Eveybody uses this. On my way to learning VBA.',
        experience: 'Word, Excel, Powerpoint',
        secondaryAction: 'Website',
        website: 'https://www.office.com/'
    },
    {
        id: 10,
        title: 'Figma',
        explanation: 'A design tool for web development.',
        experience: 'This website, HMCC Hong Kong Website',
        secondaryAction: 'Website',
        website: 'https://www.figma.com/'
    },
    {
        id: 11,
        title: 'Leadership',
        explanation: 'Python is a popular programming language used in modern day data processing and web development.',
        experience: 'Internship, Group Projects,MEMSI (MIT Entrepreneurship and Maker Skills Integrator)',
        secondaryAction: 'MEMSI',
        website: 'https://memsi.mit.edu/'
    },
    ]

    return (
        <ChakraProvider theme={theme}>
            <Container
                maxW='container.xl'
                bgColor='inherit'
                pb={['3vw', '1vw']}
                px={['3vw', '5vw']}
                id='skills'
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
                        Skills
                    </Center>
                </Center>
                <SimpleGrid columns={[2, 3, 6]} spacing='10px' >
                    {skillList.map((property) => (
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bgColor='#EEEEEE80'>

                            <Center>
                                <Image height={{ 'base': '70px', 'sm': '50px', 'md': '100px' }} mt={{ 'base': '4px', 'sm': '3px', 'md': '10px' }} src={property.imageUrl} alt={property.imageAlt} />
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
                                        <Button bgColor={'inherit'} onClick={() => handle(property.id)}>
                                            {property.skillsText}
                                        </Button>

                                    </Box>
                                </Center>
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
                                        <ModalHeader>{skillsModal[parseInt(count)].title}</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            {skillsModal[parseInt(count)].explanation}
                                            <Text fontWeight={'bold'}>Used in:</Text>
                                            {skillsModal[parseInt(count)].experience}
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                Close
                                            </Button>
                                            <Button variant='ghost'> <Link href={skillsModal[parseInt(count)].website} isExternal>
                                                {skillsModal[parseInt(count)].secondaryAction}
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

export default Skills;
