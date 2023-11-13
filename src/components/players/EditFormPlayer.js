import {
    Box,
    Button,
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    useTheme
} from "@mui/material";
import {tokens} from "../../theme";
import {useContext, useState} from "react";
import {PlayerContext} from "../../context/PlayersContext";

const EditFormPlayer = ({thePlayer}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const {editPlayer} = useContext(PlayerContext);

    const _id = thePlayer._id;

    const [name, setName] = useState(thePlayer.name);
    const [age, setAge] = useState(thePlayer.age);
    const [position, setPosition] = useState(thePlayer.position);
    const [market_value, setMarketValue] = useState(thePlayer.market_value);
    const [description, setDescription] = useState(thePlayer.description);

    const updatedPlayer = {_id, name, age, position, market_value, description}

    const handleSubmit = async (e) => {
        e.preventDefault();

        await editPlayer(_id, updatedPlayer);
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
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Idade</Typography></InputLabel>
                    <Input
                        type="number"
                        name="age"
                        onChange={(e) => setAge(e.target.value)}
                        value={age} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Posição</Typography></InputLabel>
                    <Select
                        name="position"
                        onChange={(e) => setPosition(e.target.value)}
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
                        onChange={(e) => setMarketValue(e.target.value)}
                        value={market_value} />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Descrição</Typography></InputLabel>
                    <Input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
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

export default EditFormPlayer;