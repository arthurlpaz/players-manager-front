import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import MatchContextProvider from "../../context/MatchesContext";
import MatchesList from "../../components/matches/MatchesList";

const Visualizar = () => {
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
                Visualizar partidas
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
                    <MatchContextProvider>
                        <MatchesList />
                    </MatchContextProvider>
                </Box>

            </Box>

        </Box>
    );

}

export default Visualizar;