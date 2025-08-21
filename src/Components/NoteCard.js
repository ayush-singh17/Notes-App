import { Box, Heading,Flex,IconButton } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

export default function NoteCard({note,handleDelete,handleNotClick}){
    return (
        <Box
            p={4}
            bg="gray.100"
            borderRadius="lg"
            w="100%"
            border="1px solid"
            borderColor="gray.400"
            onClick={() => handleNotClick(note)}
            >
            <Flex justifyContent="space-between" alignItems="center">
                <Heading as="h2" size="md">
                {note.heading}
                </Heading>
                <IconButton
                aria-label="Delete note"
                size="sm"
                bg="gray.300"
                onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(note.id)}}
                >
                <FaTrashAlt color="black" />
                </IconButton>
            </Flex>
        </Box>
    );
}