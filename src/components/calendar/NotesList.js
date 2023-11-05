import Note from "./Note";
import { Box } from "@mui/material";
import AddNote from "./AddNote"

const NotesList = ({notes, handleAddNote, handleDeleteNote}) =>{
    return(
        <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            gridAutoRows="200px"
            gap="20px"
            rowGap="0px"
            p="20px"
        >
            {notes.map((note)=> (
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </Box>
    )
}

export default NotesList;