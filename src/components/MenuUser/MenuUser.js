import React from "react";
//import {Auth} from "../../services/service";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import {PersonOutline} from "@mui/icons-material";
//import EditIcon from "@mui/icons-material/Edit";
import {IconButton, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {useNavigate} from "react-router-dom";
import {authLogout} from "../../services/service.auth";

function MenuUser() {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        authLogout();

        navigate("/auth/signin");

        // Recarrega a página automaticamente
        window.location.reload();
    }

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <PersonOutline/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleLogout} style={{color: "red"}}><LogoutIcon style={{marginRight: '0.5vh', color: "red"}}/>
                    Sair
                </MenuItem>
            </Menu>
        </div>
    );
}

export default MenuUser;