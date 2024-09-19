import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Link, animateScroll as scroll } from "react-scroll";

interface Props {
    children: React.ReactNode
}

const routes = [{ alias: 'About Me', address: 'about' }, { alias: 'Skills', address: 'skills' }, { alias: 'Projects', address: 'projects' }, { alias: 'Experiences', address: 'experience' }, { alias: 'Get in Touch!', address: 'getintouch' }]

const NavLink = (props: Props) => {
    const { children, path } = props
    return (

        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#' + path}
            smooth={true}
        >

            {children}
        </Box >

    )
}

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} as="header" position="fixed" w="100%" top='0' zIndex={'9999'}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="samyak"
                                spy={true}
                                smooth={true}
                                offset={-700}
                                duration={500}

                            ><Text fontWeight={'bold'}>{'<SAMYAK />'}</Text></Link>
                        </Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {/* {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>

                            ))} */}

                            <Box
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                }}
                            >
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}

                                >About Me</Link>
                            </Box>

                            <Box
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                }}
                            >
                                <Link
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}

                                >Skills</Link>
                            </Box>
                            <Box
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                }}
                            >
                                <Link
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}

                                >Projects</Link>
                            </Box>
                            <Box
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                }}
                            >
                                <Link
                                    activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}

                                >Experience</Link>
                            </Box>

                            <Box
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                }}
                            >
                                <Link
                                    activeClass="active"
                                    to="getintouch"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}

                                >Get in Touch</Link>
                            </Box>

                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>

                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {routes.map((link) => (
                                <Link
                                    activeClass="active"
                                    to={link.address}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}

                                >{link.alias}</Link>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}


export default Navbar