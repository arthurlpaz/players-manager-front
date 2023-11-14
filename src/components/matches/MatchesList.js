import {Box, Button, Dialog, IconButton, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {useContext, useEffect, useState} from "react";
import {MatchContext} from "../../context/MatchesContext";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Match from "./Match";
import AddFormMatch from "./AddFormMatch";

const MatchesList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const{matches} = useContext(MatchContext);

    const [show, setShow] = useState(true);
    const handleShowMatch = () => setShow(true);
    const handleCloseMatch = () => setShow(false);

    const acao = true

    useEffect(() => {
        handleCloseMatch()
    }, [matches])

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
                <IconButton onClick={handleShowMatch}>
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
                        <th>Local</th>
                        <th>Data</th>
                        <th>Gols</th>
                        <th>Assistências</th>
                        <th>Minutos Jogados</th>
                        <th>Ação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        matches ?
                            matches.map(match => (
                                <tr key={match._id}>
                                    <Match match={match} acao={acao} />
                                </tr>
                            )):
                            <h1> Não há partidas!
                            </h1>}
                    </tbody>
                </table>
            </Box>
        </Box>
            <Dialog open={show} onClose={handleCloseMatch} fullWidth>
                <AddFormMatch />
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
                        onClick={handleCloseMatch}
                        variant="contained"
                        sx={{ m: "10px", p: "10px" }}>

                        <Typography>fechar</Typography>
                    </Button>
                </Box>

            </Dialog></>

    )
}

export default MatchesList;