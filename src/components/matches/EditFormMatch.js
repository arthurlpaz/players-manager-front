import {
    Box,
    Button,
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    Typography,
    useTheme
} from "@mui/material";
import {tokens} from "../../theme";
import {useContext, useState} from "react";
import {MatchContext} from "../../context/MatchesContext";

const EditFormMatch = ({theMatch}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const {editMatch} = useContext(MatchContext);

    const _id = theMatch._id;

    const [local, setLocal] = useState(theMatch.local);
    const [date, setDate] = useState(theMatch.date);
    const [goals, setGoals] = useState(theMatch.goals);
    const [assists, setAssists] = useState(theMatch.assists);
    const [minutes_played, setMinutes_played] = useState(theMatch.minutes_played);


    const updatedMatch = {_id, local, date, goals, assists, minutes_played}

    const handleSubmit = async (e) => {
        e.preventDefault();

        await editMatch(_id, updatedMatch);
    }

    return (
        <><Box>
            <FormGroup >
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Adicionar Jogador</Typography>
                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Local</Typography></InputLabel>
                    <Input
                        type="text"
                        name="local"
                        onChange={(e) => setLocal(e.target.value)}
                        value={local} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Data</Typography></InputLabel>
                    <Input
                        type="date"
                        name="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Gols</Typography></InputLabel>
                    <Input
                        type="number"
                        name="goals"
                        onChange={(e) => setGoals(e.target.value)}
                        value={goals}
                    />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Assistências</Typography></InputLabel>
                    <Input
                        type="number"
                        name="assists"
                        onChange={(e) => setAssists(e.target.value)}
                        value={assists} />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Minutos jogados</Typography></InputLabel>
                    <Input
                        type="number"
                        name="minutes_played"
                        onChange={(e) => setMinutes_played(e.target.value)}
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

export default EditFormMatch;