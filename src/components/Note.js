import React from 'react';
import { Paper, Typography, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ note, deleteNote, setNoteToEdit }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper style={{ padding: '16px', marginBottom: '16px', position: 'relative' }}>
        <Typography variant="body1">{note.text}</Typography>
        <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
          <IconButton onClick={() => setNoteToEdit(note)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => deleteNote(note.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </Paper>
    </Grid>
  );
};

export default Note;
