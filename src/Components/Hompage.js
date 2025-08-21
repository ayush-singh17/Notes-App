import { Box, Heading } from "@chakra-ui/react";
import NoteCard from "./NoteCard";

export default function Homepage({notes,handleDelete,handleNoteClick}){

    return (
        <Box>
            {notes.length === 0 ? (
                <Heading size="md" color="gray.500">
                You have no saved notes.
                </Heading>
            ) : (
                notes.map(note => (
                <Box key={note.id} mb={4}>
                    <NoteCard key={note.id} note={note} handleDelete={handleDelete} handleNotClick={handleNoteClick} />
                </Box>
                ))
            )}
        </Box>
    );
}