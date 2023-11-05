import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Calendar from "../../components/calendar/Calendar"

function Home(){

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px" >
            <Box><Calendar/></Box>
        </Box>
    )
}

export default Home;