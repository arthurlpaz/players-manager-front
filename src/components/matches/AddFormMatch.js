import {
    Box,
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    Typography,
    useTheme,
    Button
} from "@mui/material";
import {useContext, useState} from "react";
import {MatchContext} from "../../context/MatchesContext";
import {tokens} from "../../theme";
import api from "../../services/service";

const AddFormMatch = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const {addMatch} = useContext(MatchContext)

    const [newMatch, setNewMatch] = useState({
        local: "", date: "", goals: "", assists: "", minutes_played: ""
    })

    const onInputChange = (e) => {
        setNewMatch({...newMatch, [e.target.name]: e.target.value})
    }

    const {local, date, goals, assists, minutes_played} = newMatch;

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await api.post("v1/matches", newMatch)

            if (response.status === 201) {
                // Limpar form após dar certo

                setNewMatch({
                    local: "",
                    date: "",
                    goals: "",
                    assists: "",
                    minutes_played: ""
                })

                addMatch(newMatch);

                alert("Partida adicionada com sucesso!")
                window.location.reload();
            }
            else {
                console.error(`Erro ao adicionar a partida. Codigo de status: ${response.status}`);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <><Box>
            <FormGroup >
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Adicionar Partidas</Typography>
                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Local</Typography></InputLabel>
                    <Input
                        type="text"
                        name="local"
                        onChange={(e) => onInputChange(e)}
                        value={local} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Data</Typography></InputLabel>
                    <Input
                        type="date"
                        name="date"
                        onChange={(e) => onInputChange(e)}
                        value={date} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Gols</Typography></InputLabel>
                    <Input
                        type="number"
                        name="goals"
                        onChange={(e) => onInputChange(e)}
                        value={goals}/>
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Assistências</Typography></InputLabel>
                    <Input
                        type="number"
                        name="assists"
                        onChange={(e) => onInputChange(e)}
                        value={assists} />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Minutos jogados</Typography></InputLabel>
                    <Input
                        type="number"
                        name="minutes_played"
                        onChange={(e) => onInputChange(e)}
                        value={minutes_played} />
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

export default AddFormMatch;