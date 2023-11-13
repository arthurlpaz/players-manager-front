import {
    MenuItem,
    Box,
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    Select,
    Typography,
    useTheme,
    Button
} from "@mui/material";
import {useContext, useState} from "react";
import {PlayerContext} from "../../context/PlayersContext";
import {tokens} from "../../theme";
import api from "../../services/service";

const AddFormPlayer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const {addPlayer} = useContext(PlayerContext)

    const [newPlayer, setNewPlayer] = useState({
        name: "", age: "", position: "", market_value: "", description: ""
    })

    const onInputChange = (e) => {
        setNewPlayer({...newPlayer, [e.target.name]: e.target.value})
    }

    const {name, age, position, market_value, description} = newPlayer;

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await api.post("v1/players", newPlayer)

            if (response.status === 201) {
                // Limpar form após dar certo

                setNewPlayer({
                    name: "",
                    age: "",
                    position: "",
                    market_value: "",
                    description: ""
                })

                addPlayer(newPlayer);

                alert("Jogador adicionado com sucesso!")
                window.location.reload();
            }
            else {
                console.error(`Erro ao adicionar o jogador. Codigo de status: ${response.status}`);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <><Box>
            <FormGroup >
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Adicionar Jogador</Typography>
                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Nome</Typography></InputLabel>
                    <Input
                        type="text"
                        name="name"
                        onChange={(e) => onInputChange(e)}
                        value={name} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Idade</Typography></InputLabel>
                    <Input
                        type="number"
                        name="age"
                        onChange={(e) => onInputChange(e)}
                        value={age} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Posição</Typography></InputLabel>
                    <Select
                        name="position"
                        onChange={(e) => onInputChange(e)}
                        value={position}
                    >
                        <MenuItem value="">Selecione a posição</MenuItem>
                        <MenuItem value="Goleiro">Goleiro</MenuItem>
                        <MenuItem value="Defensor">Defensor</MenuItem>
                        <MenuItem value="Meio">Meio</MenuItem>
                        <MenuItem value="Atacante">Atacante</MenuItem>

                    </Select>
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Valor de mercado</Typography></InputLabel>
                    <Input
                        type="number"
                        name="market_value"
                        onChange={(e) => onInputChange(e)}
                        value={market_value} />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Descrição</Typography></InputLabel>
                    <Input
                        type="text"
                        name="description"
                        onChange={(e) => onInputChange(e)}
                        value={description} />
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
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ m: "0px", p: "10px" }}>

                    <Typography>salvar</Typography>
                </Button>
            </Box></>
    )
}

export default AddFormPlayer;