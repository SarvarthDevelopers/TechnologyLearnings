import { Typography } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';   
import Note from "./Note";
import { NoteObject } from "../models/Note";



interface INotesProps{
    notes: NoteObject[]
    deleteNote: (id: number) => void;
}

const Notes: React.FC<INotesProps> = ({notes,deleteNote  }) => {
    return(
        <Box> 
            <Typography >Notes</Typography>
            <Box>
                {
                   notes.map(note =>(
                    <Note note={note}/>
                   ))
                }
            </Box>
        </Box>
    )
}
export default Notes;