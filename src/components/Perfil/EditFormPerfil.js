import {
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel
} from "@mui/material";

import { useContext, useState } from "react";
import { PerfilContext } from "../../context/PerfilContext";
import { tokens } from "../../theme";

const EditFormPerfil = ({thePerfil}) =>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const {updatePerfil} = useContext(PerfilContext)
    //como mater as informações no form para que sejam editadas
    const id = thePerfil.id

    const[name, setName] = useState(thePerfil.name);
    const[email, setEmail] = useState(thePerfil.email);
    const[adress, setAdress] = useState(thePerfil.adress);

    const updatedPerfil = {id, name, email, adress}

    const handleSubmitPerfil = (e) =>{
        e.preventDefault();
        updatePerfil(id, updatedPerfil)

        window.location.reload();
    }

    return(
        <><Box>
            <FormGroup>
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Editar Perfil</Typography>
                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h4">Nome</Typography></InputLabel>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h4">Email</Typography></InputLabel>
                    <Input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h4">Endereço</Typography></InputLabel>
                    <Input
                        type="text"
                        name="adress"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                    />
                </FormControl>


            </FormGroup>
        </Box>

            <Box
                display="flex"
                justifyContent="end"
                flexDirection="row"
                alignItems="center"
                mr="30px"
                mb="0px"
            >
                <Button
                    style={{
                        background: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.greenAccent[400],
                    }}
                    onClick={handleSubmitPerfil}
                    variant="contained"
                    sx={{ m: "0px", p: "10px" }}>

                    <Typography>salvar</Typography>
                </Button>
            </Box></>

    )

}

export default EditFormPerfil;