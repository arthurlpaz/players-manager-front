import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import PlayerContextProvider from "../../context/PlayersContext";
import PlayersList from "../../components/players/PlayersList";

const Register = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            m="20px">
            <Typography
                variant="h3"
                fontWeight="600"
                mb="10px"
                color={colors.grey[100]}
            >
                Registrar Jogador
            </Typography>

            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/*Tabel section*/}

                <Box
                    mt="10px"
                    gridColumn="span 12"
                    gridRow="span 4"
                    backgroundColor={colors.primary[400]}
                >
                    <PlayerContextProvider>
                        <PlayersList />
                    </PlayerContextProvider>
                </Box>

            </Box>

        </Box>
    );

}

export default Register;