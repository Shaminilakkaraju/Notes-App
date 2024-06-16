import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Grid } from '@mui/material';

const NoteForm = ({ addNote, editNote, noteToEdit }) => {
  const [note, setNote] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setNote(noteToEdit.text);
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteToEdit) {
      editNote(noteToEdit.id, note);
    } else {
      addNote(note);
    }
    setNote('');
  };

  return (
    <Paper style={{ padding: '16px', marginBottom: '16px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Enter your note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              {noteToEdit ? 'Update Note' : 'Add Note'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default NoteForm;
