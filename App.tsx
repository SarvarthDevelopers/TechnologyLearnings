// import CreateNote from "./components/CreateNote";
// import Header from "./components/Header";
// import Notes from './components/Notes';
// import React, { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import { NoteObject } from "./models/Note";
// import Note from "./components/Note";


// export function App() {
// //
//   const[notes,setNotes] = useState<NoteObject[]>([]);

// useEffect(() => {
//   if(sessionStorage.getItem('notes')) {
//     setNotes(JSON.parse(sessionStorage.getItem('notes') || '[]'));
//   }
// }, []);

//   const addNote = (note: NoteObject) => {
//     setNotes([...notes, note]);
//     sessionStorage.setItem('notes', JSON.stringify([...notes, note]));
//   };

//   const deleteNote= (id:number) =>{
//     const updatedNotes =notes.filter(note => note.id !== id);
//     setNotes(updatedNotes);
//     sessionStorage.setItem('notes', JSON.stringify(updatedNotes));

//   }

 

//   return (
//     <>    //fragment tags are faster than Html tags & less memory
//     <Box style={{padding: 20}}>
//     <Header />
//     <CreateNote addNotes={addNote} />
//     <Notes notes={notes} deleteNote={deleteNote} />
//     </Box>
//     </>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
// import Home from './pages/Home';
// Please ensure the file exists at src/pages/Home.tsx or src/pages/Home.jsx
// If it does not exist, create it as shown below:

// src/pages/Home.tsx
// import React from 'react';
// import { NoteObject } from '../models/Note';
// interface HomeProps {
//   notes: NoteObject[];
//   addNote: (note: NoteObject) => void;
//   deleteNote: (id: number) => void;
// }
// const Home: React.FC<HomeProps> = ({ notes, addNote, deleteNote }) => (
//   <div>Home Page</div>
// );
// export default Home;

import Home from './pages/Home';
import About from './pages/About';
import { NoteObject } from './models/Note';

export function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem('notes')) {
      setNotes(JSON.parse(sessionStorage.getItem('notes') || '[]'));
    }
  }, []);

  const addNote = (note: NoteObject) => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <ErrorBoundary>
    <BrowserRouter>
      <Box style={{ padding: 20 }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home notes={notes} addNote={addNote} deleteNote={deleteNote} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
