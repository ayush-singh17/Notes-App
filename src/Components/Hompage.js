import { Box, Heading } from "@chakra-ui/react";
import NoteCard from "./NoteCard";

export default function Homepage({notes,handleDelete,handleNoteClick,filteredNotes,search,togglePin}){

    const sortedNotes = [...notes].sort((a, b) => (b.isPinned === true) - (a.isPinned === true));
    const sortedFilteredNotes = [...filteredNotes].sort((a, b) => b.isPinned - a.isPinned);

    return (
        <Box>
            {notes.length === 0 ? (
                <Heading size="md" color="gray.500">
                You have no saved notes.
                </Heading>
            ) : (
                    <>
                        {search === '' ? (
                            sortedNotes.map(note => (
                                <Box key={note.id} mb={4}>
                                <NoteCard key={note.id} note={note} handleDelete={handleDelete} handleNotClick={handleNoteClick} togglePin={togglePin} />
                                </Box>
                            ))
                            ) : (
                            sortedFilteredNotes.map(note => (
                                <Box key={note.id} mb={4}>
                                <NoteCard key={note.id} note={note} handleDelete={handleDelete} handleNotClick={handleNoteClick} />
                                </Box>
                            ))
                        )}
                    </>
                )
            }
        </Box>
    );
}