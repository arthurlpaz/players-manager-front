import {
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel
} from "@mui/material";

import { useContext, useState } from "react";
import { PerfilContext } from "../../context/PerfilContext";


const AddFormPerfil = () =>{


    const {addPerfil} = useContext(PerfilContext)

    const [newPerfil, setNewPerfil] = useState({
        name:"", email:"", adress: ""
    })

    const onInputChange = (e) =>{
        setNewPerfil({...newPerfil, [e.target.name]: e.target.value})
    }
    const {name, email, adress} = newPerfil

    const handleSubmitPerfil = (e) =>{
        e.preventDefault()
        addPerfil(name, email, adress)
    }

    return(
        <><Box>
            <FormGroup >
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Adicionar Informações do Perfil</Typography>

                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h4">Nome</Typography></InputLabel>
                    <Input
                        type="text"
                        name="name"
                        onChange={(e) => onInputChange(e)}
                        value={name} />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h4">Email</Typography></InputLabel>
                    <Input
                        type="text"
                        name="email"
                        onChange={(e) => onInputChange(e)}
                        value={email} />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h4">Endereço</Typography></InputLabel>
                    <Input
                        type="text"
                        name="adress"
                        onChange={(e) => onInputChange(e)}
                        value={adress} />
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
                <Button onClick={handleSubmitPerfil} variant="contained" sx={{ m: "0px", p: "10px" }}><Typography>salvar</Typography></Button>
            </Box></>

    )

}

export default AddFormPerfil;