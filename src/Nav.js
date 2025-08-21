import { Box, Icon, Text, Button } from "@chakra-ui/react";
import { FaNoteSticky } from "react-icons/fa6";
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Nav({viewNotes,updateViewNotes}){

    const handleClick = viewNotes?(updateViewNotes):null;

    return (
        <>
            <Box display={{base:"flex",lg:"grid"}} alignItems="center" justifyContent="space-between">
                <Box  display="flex" gap="10px" alignItems="center" justifyContent="left">
                    <Icon as={FaNoteSticky} boxSize="30px" />
                    <Text as={ReactRouterLink} to="/" fontSize="30px" fontWeight="bold" onClick={handleClick}>Notes App</Text>
                </Box>
                <Box alignItems="center" justifyContent="center" p="10px" paddingTop={{lg:"20px"}}>
                    <Button as={ReactRouterLink} to="/login" w={{base:"200px"}}>Login</Button>
                </Box>
                <Box display="flex" gap="10px" alignItems="center" justifyContent="left" paddingTop={{lg:'10px'}}>
                    <Icon as={FaHome} boxSize="20px"/>
                    <Text  as={ReactRouterLink} to="/" onClick={handleClick}>Home</Text>
                </Box>
            </Box>
        </>
    );
}

export default Nav;