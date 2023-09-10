import './App.css';
import uuid from 'react-uuid';
import Sidebar from './Sidebar';
import Main from './Main';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);

  const onAddNote = () => {
    // we are creating object in function
    const newNote = {
      id: uuid(),
      title: "Untitled Text",
      body: "",
      lastModefied: Date.now(),
    }
    const CopyNotes = [...notes]
    const updateNotes = [CopyNotes, newNote]
    setNotes([newNote, ...notes])
  }
  const copyTextToClipboard = (title) => {
    navigator.clipboard.writeText(title);
  }
  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete)) // !== if not
  }

  const getActiveNote = () => {
    const currentNote = notes.find((note) => note.id === activeNote)
    return currentNote
  }
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote
      }
      return note;
    })
    setNotes(updatedNotesArray)
  }
  return (
    <div className="App">
      <Sidebar 
        notes={notes}         
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}/>
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} copyTextToClipboard={copyTextToClipboard}/>
    </div>
  );
}

export default App;
 