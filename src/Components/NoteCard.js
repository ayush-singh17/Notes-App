import { Box, Heading,Flex,IconButton } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdOutlinePushPin } from "react-icons/md";

export default function NoteCard({note,handleDelete,handleNotClick,togglePin}){
    return (
        <Box
            p={4}
            bg="gray.100"
            borderRadius="lg"
            w="100%"
            borderColor="gray.400"
            border="1px solid"
            onClick={() => handleNotClick(note)}
            >
            <Flex justifyContent="space-between" alignItems="center">
                <Heading as="h2" size="lg">
                {note.heading}
                </Heading>
                <Flex gap='4px'>
                    <IconButton
                        aria-label="Edit note"
                        size="sm"
                        bg="gray.300"
                        _hover={{
                            borderColor: "blackAlpha.500"
                        }}
                    >
                        <MdEdit color="black"/>
                    </IconButton>
                    <IconButton
                        aria-label="Delete note"
                        size="sm"
                        bg="gray.300"
                        _hover={{
                            borderColor: "blackAlpha.500"
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(note.id)}}
                        >
                        <FaTrashAlt color="black" />
                    </IconButton>
                </Flex>
            </Flex>
            <Flex justify='right' align="center" p={2}>
                <IconButton
                    aria-label="Pin note"
                    size="sm"
                    bg="gray.100"
                    _hover={{
                        borderColor: "blackAlpha.500"
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        togglePin(note.id);
                    }}
                ><MdOutlinePushPin color={note.isPinned ? "gold" : "black"} /></IconButton>
            </Flex>
        </Box>
    );
}