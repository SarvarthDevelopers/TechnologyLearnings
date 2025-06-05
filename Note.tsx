import { NoteObject } from '../models/Note';
import { Card, CardContent, Typography,Button, styled } from '@mui/material';
import Box from '@mui/material/Box';


interface INoteProps {
    note: NoteObject
}

const StyledCard = styled(Card)`
    width: 400px;
    margin: 20px;
`

const Wrapper = styled(Box)`
   & > button{
   border: 1px solid #000;
   background-color: #fff;
   margin-top: 5px;}
`;


const Note: React.FC<INoteProps> = ({note} ) => {
    function deleteNote(id: number): void {
        throw new Error('Function not implemented.');
    }

    return(
        <StyledCard style={{backgroundColor:note.color}}>
            <CardContent>
                <Wrapper>
                    <Typography>{note.title}</Typography>
                    <Typography>{note.details}</Typography>
                    <Typography>{note.date}</Typography>
                    <Button variant="outlined" onClick={()=>deleteNote(note.id)}>Delete</Button>
                        
                </Wrapper>
            </CardContent>

            

        </StyledCard>
    )
}

export default Note;