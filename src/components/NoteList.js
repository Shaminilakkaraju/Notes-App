import React from 'react';
import Note from './Note';
import { Grid } from '@mui/material';

const NoteList = ({ notes, deleteNote, setNoteToEdit }) => {
  return (
    <Grid>
    <div className="note-list-container">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <Note
            note={note}
            deleteNote={deleteNote}
            setNoteToEdit={setNoteToEdit}
          />
        </div>
      ))}
    </div>
    </Grid>
  );
};

export default NoteList;
