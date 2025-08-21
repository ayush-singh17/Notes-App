import { InputGroup,Input,Box,FieldHelperText,FieldLabel,FieldRoot,FieldRequiredIndicator, Button,Center,VStack, FieldErrorText} from "@chakra-ui/react";
import { LuUser } from "react-icons/lu"
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { Toaster, createToaster} from "@ark-ui/react/toast";
import { useNavigate } from "react-router-dom"

const toaster = createToaster()

function Login(){

    const navigate = useNavigate()

    const handleLogin = () => {
    toaster.create({
      title: "Login Successful 🎉",
      description: "Welcome back!",
      type: "success",
      duration: 3000,
    })
    setTimeout(() => {
      navigate("/")
    }, 1000)
  }

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
                <Button onClick={handleLogin}>Login</Button>
                <Toaster toaster={toaster}>
                    {(toast) => (
                    <div
                        style={{
                        padding: "12px",
                        margin: "8px",
                        borderRadius: "8px",
                        background:
                            toast.type === "success" ? "green" : "gray",
                        color: "white",
                        }}
                    >
                        <strong>{toast.title}</strong>
                        <p>{toast.description}</p>
                    </div>
                    )}
                </Toaster>
                </VStack>
            </Center>
       </Box>
    );
}

export default Login;