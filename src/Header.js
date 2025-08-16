import { Button, Flex, Input} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';

function Header(){
    return (
        <Flex display="flex" justifyContent="space-between" gap="10px">
            <Input placeholder="Type to Search" w={{base:"300px",lg:"400px",xl:"750px"}}></Input>
            <Button as={ReactRouterLink} to="/newTextFile" bg="yellow.500" justifyContent="center">+ Create new Text File</Button>
        </Flex>
    );
}

export default Header;