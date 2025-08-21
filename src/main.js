import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/login";
import Notes from "./Components/Notes";
import Homepage from "./Components/Hompage";


function Main({updateViewNotes}){

    const [notes,setNotes]=useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    const handleDelete = (idToDelete) => {
        const updatedNotes = notes.filter(note => note.id !== idToDelete);
        setNotes(updatedNotes);
    };

    const addNote = (newNote) => {
        setNotes(prevNotes => {
            const index = prevNotes.findIndex(n => n.id === newNote.id);
            if (index !== -1) {
            const updatedNotes = [...prevNotes];
            updatedNotes[index] = newNote;
            return updatedNotes;
            } else {
            return [...prevNotes, newNote];
            }
        });
    };

    const handleNoteClick = (note) => {
        setSelectedNote(note);
        updateViewNotes();
    };

    const handleBack = () => {
        setSelectedNote(null);
        updateViewNotes();
    };

    return (
        <>
            {selectedNote ? (
                <Notes
                    note={selectedNote}
                    addNotes={addNote}
                    handleBack={handleBack}
                />
            ) : (
                <Routes>
                    <Route path="/" element={<Homepage
                    notes={notes} handleDelete={handleDelete} handleNoteClick={handleNoteClick}/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/newTextFile" element={<Notes
                            updateViewNotes={updateViewNotes}
                            addNotes={addNote}
                        />}
                    />
                </Routes>
            )}
        </>
    );
}

export default Main;

