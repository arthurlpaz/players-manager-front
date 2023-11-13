import { Box, IconButton, TextField,Dialog, Button, Typography, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { PerfilContext } from "../../context/PerfilContext";
import { useState, useContext } from "react";
import { useEffect } from "react";
import EditFormPerfil from "./EditFormPerfil";
import { tokens } from "../../theme";

const Perfil = ({perfil}) =>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const {deletePerfil} = useContext(PerfilContext)

    useEffect(() =>{
        handleClose()
    }, [perfil])

    return(

        <>
            <Box
                sx={{
                    // backgroundColor: "whitesmoke",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center"
                }}
            >
                <IconButton onClick={handleShow}>
                    <Button
                        style={{
                            background: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.greenAccent[400],
                        }}
                        sx={{ boxShadow: "none",}}
                        variant="contained" startIcon={<EditIcon />}>

                        Editar Perfil
                    </Button>
                </IconButton>

            </Box>


            <tr className="trPerfilMed">
                <TextField
                    label={<Typography variant="headline" component="h2" >Nome</Typography>}
                    defaultValue={perfil.name}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{width:"700px", height:"75px"}}
                />
            </tr>

            <tr className="trPerfilMed">
                <TextField
                    label={<Typography variant="headline" component="h2" >Email</Typography>}
                    defaultValue={perfil.email}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{width:"700px", height: "75px"}}
                />

            </tr>

            <tr className="trPerfilMed">
                <TextField
                    label={<Typography variant="headline" component="h2" >Endereço</Typography>}
                    defaultValue={perfil.adress}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{width:"700px"}}
                />



            </tr>


            <Dialog open={show} onClose={handleClose} fullWidth>
                <EditFormPerfil thePerfil={perfil} />
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
                        sx={{ m: "10px", p: "10px" }}>

                        <Typography>fechar</Typography>
                    </Button>
                </Box>
            </Dialog>
        </>

    )
}

export default Perfil;