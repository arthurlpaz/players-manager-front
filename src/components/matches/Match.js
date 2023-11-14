import {Box, Button, Dialog, IconButton, Typography, useTheme} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {tokens} from "../../theme";
import {MatchContext} from "../../context/MatchesContext";
import {useNavigate} from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditFormMatch from "./EditFormMatch";

const Match = ({match, acao}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const {deleteMatch} = useContext(MatchContext);

    const navigate = useNavigate();

    useEffect(() => {
        handleClose()
    }, [match]);

    return (
        <>
            <td>{match && match.local}</td>
            <td>{match && match.date}</td>
            <td>{match && match.goals}</td>
            <td>{match && match.assists}</td>
            <td>{match && match.minutes_played}</td>
            {acao ? <td><IconButton onClick={handleShow} ><EditIcon /></IconButton>
                    <IconButton onClick={() => deleteMatch(match._id)}><DeleteIcon /></IconButton>
                </td>
                :
                <td><IconButton onClick={() => navigate()}></IconButton></td>
            }

            <Dialog open={show} onClose={handleClose} fullWidth>
                <EditFormMatch theMatch={match} />
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="end"
                    alignItems="center"
                    mr="20px"
                    mb="10px"
                >
                    <Button
                        style={{
                            background: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.greenAccent[400],
                        }}
                        onClick={handleClose}
                        variant="contained"
                        sx={{m: "10px", p: "10px"}}
                    >
                        <Typography>Fechar</Typography>
                    </Button>
                </Box>
            </Dialog>
        </>
    )
}

export default Match;