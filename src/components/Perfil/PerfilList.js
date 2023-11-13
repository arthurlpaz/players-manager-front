import { Box, IconButton, Typography, useTheme, Dialog, Button, InputLabel,FormGroup, FormControl, Input } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { tokens } from "../../theme";
import { useContext, useState } from "react";
import { PerfilContext } from "../../context/PerfilContext";
import { useEffect } from "react";
import AddFormPerfil from "./AddFormPerfil";
import Perfil from "./Perfil";

const PerfilList = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const{perfils} = useContext(PerfilContext)

    const [show, setShow] = useState(true)
    const handleShowPerfil = () => setShow(true)
    const handleClosePerfil = () => setShow(false)

    useEffect(() =>{
        handleClosePerfil()
    }, [perfils])



    return(


        <><Box m="20">

            {/*Crud table */}
            <Box
                borderRadius="10px"
                p="10px"
                m="20px"
                maxHeight="700px"
                maxWidth="auto"
                display="flex"
                flexDirection="column"
                alignContent="center"
                justifyContent="space-between"
                whiteSpace="normal"
                overflow="auto"
                textAlign="center"
            >
                <table className="tablePerfilMed">

                    {perfils.map(perfil => (
                        <tr className="trGeralPerfilMed" key={perfil.id}>
                            <Perfil perfil={perfil} />
                        </tr>
                    ))}

                </table>
            </Box>
        </Box>

            <Dialog open={show} onClose={handleClosePerfil} fullWidth>
                <AddFormPerfil/>
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
                        onClick={handleClosePerfil}
                        variant="contained"
                        sx={{ m: "10px", p: "10px" }}>

                        <Typography>fechar</Typography>
                    </Button>
                </Box>

            </Dialog></>

    )
}

export default PerfilList;