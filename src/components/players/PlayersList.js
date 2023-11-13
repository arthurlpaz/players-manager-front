import {Box, Button, Dialog, IconButton, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {useContext, useEffect, useState} from "react";
import {PlayerContext} from "../../context/PlayersContext";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Player from "./Player";
import AddFormPlayer from "./AddFormPlayer";

const PlayersList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const{players} = useContext(PlayerContext);

    const [show, setShow] = useState(true);
    const handleShowPlayer = () => setShow(true);
    const handleClosePlayer = () => setShow(false);

    const acao = true

    useEffect(() => {
        handleClosePlayer()
    }, [players])

    return(


        <><Box m="20">

            {/*Crud table */}
            <Box
                sx={{
                    // backgroundColor: "whitesmoke",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center"
                }}
            >
                <IconButton onClick={handleShowPlayer}>
                    <AddBoxIcon />
                </IconButton>
            </Box>

            <Box
                style={{
                    background: theme.palette.mode === "dark" ? colors.greenAccent[600] : colors.grey[900],
                }}
                borderRadius="10px"
                p="10px"
                m="20px"
                maxHeight="520px"
                maxWidth="auto"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                whiteSpace="normal"
                overflow="auto"
                textAlign="center"
            >

                <table>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Posição</th>
                        <th>Valor de mercado</th>
                        <th>Descrição</th>
                        <th>Ação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        players ?
                            players.map(player => (
                                <tr key={player._id}>
                                    <Player player={player} acao={acao} />
                                </tr>
                            )):
                            <h1> Não há jogadores!
                            </h1>}
                    </tbody>
                </table>
            </Box>
        </Box>
            <Dialog open={show} onClose={handleClosePlayer} fullWidth>
                <AddFormPlayer />
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
                        onClick={handleClosePlayer}
                        variant="contained"
                        sx={{ m: "10px", p: "10px" }}>

                        <Typography>fechar</Typography>
                    </Button>
                </Box>

            </Dialog></>

    )
}

export default PlayersList;