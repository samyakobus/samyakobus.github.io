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

const Links = ['About', 'Skills', 'Experience', 'Contact Me']

const routes = ['/about', '/skills', '/experience', '/contact']

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
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'sm'}
                            mr={4}
                            leftIcon={<AddIcon />}>
                            Action
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}


export default Navbar