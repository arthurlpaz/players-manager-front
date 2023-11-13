import {Box, Button, Dialog, IconButton, Typography, useTheme} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {tokens} from "../../theme";
import {PlayerContext} from "../../context/PlayersContext";
import {useNavigate} from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditFormPlayer from "./EditFormPlayer";

const Player = ({player, acao}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const {deletePlayer} = useContext(PlayerContext);

    const navigate = useNavigate();

    useEffect(() => {
        handleClose()
    }, [player]);

    return (
        <>
            <td>{player && player.name}</td>
            <td>{player && player.age}</td>
            <td>{player && player.position}</td>
            <td>{player && player.market_value}</td>
            <td>{player && player.description}</td>
            {acao ? <td><IconButton onClick={handleShow} ><EditIcon /></IconButton>
                        <IconButton onClick={() => deletePlayer(player._id)}><DeleteIcon /></IconButton>
                    </td>
                :
                <td><IconButton onClick={() => navigate()}></IconButton></td>
            }

            <Dialog open={show} onClose={handleClose} fullWidth>
                <EditFormPlayer thePlayer={player} />
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

export default Player;