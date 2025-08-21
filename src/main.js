import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/login";
import Notes from "./Components/Notes";
import Homepage from "./Components/Hompage";


function Main({updateViewNotes,search}){

    const [notes,setNotes]=useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });
    const [selectedNote, setSelectedNote] = useState(null);

    const filteredNotes = notes.filter(note => note.heading.toLowerCase().includes(search.toLowerCase()));

    const handleDelete = (idToDelete) => {
        const updatedNotes = notes.filter(note => note.id !== idToDelete);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    const addNote = (newNote) => {
        setNotes(prevNotes => {
            const updatedNotes = [...prevNotes, newNote];
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return updatedNotes;
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

    const updateNotes = (editNote) => {
        setNotes(prevNotes => {
            const updatedNotes = prevNotes.map(note =>
            note.id === editNote.id ? editNote : note
            );
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    };

    const togglePin = (idToPin) => {
        setNotes(notes.map(note =>
        note.id === idToPin ? { ...note, isPinned: !note.isPinned } : note
        ));
    };

    return (
        <>
            {selectedNote ? (
                <Notes
                    note={selectedNote}
                    addNotes={addNote}
                    handleBack={handleBack}
                    updateViewNotes={updateViewNotes}
                    updateNotes={updateNotes}
                />
            ) : (
                <Routes>
                    <Route path="/" element={<Homepage
                    notes={notes} handleDelete={handleDelete} handleNoteClick={handleNoteClick} filteredNotes={filteredNotes} search={search}  togglePin={togglePin}/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/newTextFile" element={<Notes
                            updateViewNotes={updateViewNotes}
                            addNotes={addNote}
                            handleBack={handleBack}
                            note={selectedNote}
                            updateNotes={updateNotes}
                        />}
                    />
                </Routes>
            )}
        </>
    );
}

export default Main;

