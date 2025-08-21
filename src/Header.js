import { Box, Button, Flex, Input,Separator,InputGroup} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

function Header({updateViewNotes}){
    return (
        <Box>
            <Flex display="flex" justifyContent="space-between" gap="10px" paddingBottom="20px">
                <InputGroup flex="1" startElement={<CiSearch />}>
                    <Input placeholder="Type to Search" w={{base:"300px",lg:"400px",xl:"750px"}}></Input>
                </InputGroup>
                <Button as={ReactRouterLink} to="/newTextFile" bg="yellow.500" justifyContent="center" onClick={updateViewNotes}>+ Create new Text File</Button>
            </Flex>
            <Separator variant="solid" p="10px"/>
        </Box>
    );
}

export default Header;