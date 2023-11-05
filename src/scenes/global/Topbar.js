import {Box, IconButton, useTheme} from "@mui/material";
import {useContext} from 'react';
import {ColorModeContext} from "../../theme";
import {DarkModeOutlined, LightModeOutlined} from "@mui/icons-material";
import MenuUser from "../../components/MenuUser/MenuUser";

const Topbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="flex-end" p={2}>

            {/* ICONS */}

            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined />
                    ): (
                        <LightModeOutlined/>
                    )}
                </IconButton>

                <IconButton>
                    <MenuUser/>
                </IconButton>
            </Box>

        </Box>
    );
}

export default Topbar;