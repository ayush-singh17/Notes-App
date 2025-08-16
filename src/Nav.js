import { Box, Icon, Text, Input, Button } from "@chakra-ui/react";
import { FaNoteSticky } from "react-icons/fa6";
import { Link as ReactRouterLink } from 'react-router-dom';

function Nav(){
    return (
        <>
            <Box display={{base:"flex",lg:"grid"}} alignItems="center" justifyContent="space-between">
                <Box  display="flex" gap="10px" alignItems="center" justifyContent="center">
                    <Icon as={FaNoteSticky} boxSize="25px" />
                    <Text as={ReactRouterLink} to="/">Notes App</Text>
                </Box>
                <Box alignItems="center" justifyContent="center" p="10px" paddingTop={{lg:"20px"}}>
                    <Button as={ReactRouterLink} to="/login" w={{base:"200px"}}>Login</Button>
                </Box>
            </Box>
            <Box alignItems="center" justifyContent="center" p="10px" paddingTop={{lg:"130px"}}>
                <Input placeholder="Type to Search" size="sm" bg="gray.50"></Input>
            </Box>
        </>
    );
}

export default Nav;