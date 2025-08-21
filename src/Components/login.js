import { InputGroup,Input,Box,FieldHelperText,FieldLabel,FieldRoot,FieldRequiredIndicator, Button,Center,VStack, FieldErrorText} from "@chakra-ui/react";
import { useState } from "react";
import { LuUser } from "react-icons/lu"
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { Link as ReactRouterLink } from 'react-router-dom';

function Login(){

    const [success, setSuccess] = useState(false);

    const handleLogin = () => {
        // Just simulating login success
        setSuccess(true);

        // Optionally hide message after 3 sec
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
       <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        bg="rgba(0, 0, 0, 0.4)"
        backdropFilter="blur(5px)"
        zIndex="1"
        >
            <Center height="100%">
                <VStack
                p={8}
                bg="white"
                borderRadius="md"
                boxShadow="lg"
                spacing={4}
                width="400px"
                >
                <Box >
                    <FieldRoot required>
                        <FieldLabel>
                            Name <FieldRequiredIndicator />
                        </FieldLabel>
                        <InputGroup startElement={<LuUser />}>
                            <Input placeholder="Enter Name" w={{base:"auto",lg:"250px"}} variant="subtle"/>
                        </InputGroup>
                        <FieldErrorText>This field is required</FieldErrorText>
                    </FieldRoot>
                </Box>
                <Box>
                    <FieldRoot required>
                        <FieldLabel>
                            Email <FieldRequiredIndicator />
                        </FieldLabel>
                        <InputGroup startElement={<MdOutlineEmail />}>
                            <Input placeholder="Enter your email" w={{base:"auto",lg:"250px"}} type="email" variant="subtle"/>
                        </InputGroup>
                        <FieldHelperText>We'll never share your email.</FieldHelperText>
                        <FieldErrorText>This field is required</FieldErrorText>
                    </FieldRoot>
                </Box>
                <Box>
                    <FieldRoot required>
                        <FieldLabel>
                            Password<FieldRequiredIndicator/>
                        </FieldLabel>
                        <InputGroup startElement={<TbLockPassword/>}>
                            <Input placeholder="Enter Password" w={{base:"auto",lg:"250px"}} type="password" variant="subtle"/>
                        </InputGroup>
                        <FieldHelperText>Password is protected</FieldHelperText>
                        <FieldErrorText>This field is required</FieldErrorText>
                    </FieldRoot>
                </Box>
                <Button onClick={handleLogin}
                    as={ReactRouterLink}
                    to="/"
                >Login</Button>
                {success && (
                    <Box color="green.500" fontWeight="bold">
                        ✅ Logged in successfully!
                    </Box>
                    )}
                </VStack>
            </Center>
       </Box>
    );
}

export default Login;