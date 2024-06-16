import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { Container, Typography, CssBaseline, Paper } from '@mui/material';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };

  const editNote = (id, newText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
    setNoteToEdit(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Paper style={{ padding: '16px', marginTop: '16px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          NOTES
        </Typography>
        <NoteForm addNote={addNote} editNote={editNote} noteToEdit={noteToEdit} />
        <NoteList notes={notes} deleteNote={deleteNote} setNoteToEdit={setNoteToEdit} />
      </Paper>
    </Container>
  );
};

export default App;
