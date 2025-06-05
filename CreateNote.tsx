import { InputBase,Box, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { NoteObject } from '../models/Note';
import { v4 as uuid } from 'uuid';
import { DETAIL_LIMIT, TITLE_LIMIT } from '../constants/constant';


const Container = styled(Box)`
& > * {
    margin: 20px 20px 20px 0;
    }
& > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.4;
    width: 300px;
    padding-right: 25px;
}
& > div > input[type="color"] {
width: 40px;
height:30px;
position: relative;
bottom:-10px;

}
& > span {
    font-size:15px;
    position: relative;
    right: 40px;
}
`

const Error = styled(Typography)`
    background: red;
    color: white;
    padding:10px;
    width:50%;
`;

const defaultObj ={
    id : 0,
    title:'',
    details:'',
    color:'',
    date: (new Date().toLocaleString().toString())
}

interface ICreateNoteProps {
    addNotes: (note: NoteObject) => void
}



const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes }) => {
    const [note, setNote] = useState<NoteObject>(defaultObj);
    // Function to handle value changes in the input fields
    const [error, setError] = useState<string>(''); 

    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
           if (error) {
            setError(''); // Clear the error if it exists
           }
        // value set (it will not override)
        setNote({...note, [e.target.name]: e.target.value
        });
        // console.log(e.target.value);
        // console.log(e.target.name);
    };

    // Add the onCreateNote function
    const onCreateNote = () => {
        if (!note.title && !note.details) {
            setError('All fields are required');
            return;
        }
           addNotes({ ...note, id: uuid() });
           // You can implement the logic to handle note creation here
            setNote(defaultObj); // Reset the note state after creation
   
        };

    return (
        <Container>
            <InputBase
                placeholder='Title' 
                onChange={onValueChange}
                name="title"
                value={note.title}
                inputProps={{
                 maxLength: TITLE_LIMIT }} // Limit the title length
            />
            <Box component="span">{note.title.length}/{TITLE_LIMIT}</Box>
            <InputBase
                placeholder='Details'
                onChange={onValueChange}
                name="details"
                value={note.details}
                inputProps={{
                 maxLength: DETAIL_LIMIT }} // Limit the details length
            />
            <Box component="span">{note.details.length}/{DETAIL_LIMIT}</Box>
            <InputBase
                type="color"
                defaultValue={"#F5F5F5"}
                placeholder="choose Color"
                onChange={onValueChange}
                name="color"
            />
            <Button 
            variant="outlined"
            onClick={() => onCreateNote()}
            >create</Button>
            {error && <Error>{error}</Error>}

        </Container>
    );
};

export default CreateNote;
