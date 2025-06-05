import React from 'react';
import CreateNote from '../components/CreateNote';
import Notes from '../components/Notes';
import { NoteObject } from '../models/Note';

interface HomeProps {
  notes: NoteObject[];
  addNote: (note: NoteObject) => void;
  deleteNote: (id: number) => void;
}

const Home: React.FC<HomeProps> = ({ notes, addNote, deleteNote }) => {
  return (
    <>
      <CreateNote addNotes={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
    </>
  );
};

export default Home;
