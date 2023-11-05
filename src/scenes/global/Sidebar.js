import React, { useState, useEffect, useContext } from "react";
import { Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import profilePicture from "../../assets/Santos_Logo.png"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ColorModeContext } from "../../theme";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: theme.palette.mode === "dark" ? colors.grey[100] : "white",
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            {/* Only show the title when isCollapsed is false */}
            {!isCollapsed && <Typography>{title}</Typography>}
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    // Function to check if the screen width is less than 600
    const isScreenSmall = () => window.innerWidth < 600;

    // State to hold the current screen width and isCollapsed state
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Function to update the isCollapsed state based on the screen width
    const updateIsCollapsed = () => {
        setIsCollapsed(isScreenSmall());
    };

    // Add event listener to update screen width when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Update isCollapsed state when the screen width changes
    useEffect(() => {
        updateIsCollapsed();
        // eslint-disable-next-line
    }, [screenWidth]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState("Dashboard");
    // eslint-disable-next-line
    const { toggleColorMode } = useContext(ColorModeContext);

    const handleToggleSidebar = () => {
        setIsCollapsed((prevState) => !prevState);
    };

    return (
        <Box
            className="sidebar"
            sx={{
                backgroundColor:
                    theme.palette.mode === "dark"
                        ? colors.primary[400]
                        : colors.greenAccent[400],
                "& .pro-sidebar-inner": {
                    background: `${
                        theme.palette.mode === "dark"
                            ? colors.primary[400]
                            : colors.greenAccent[400]
                    } !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: `${
                        theme.palette.mode === "dark"
                            ? colors.greenAccent[400]
                            : colors.blueAccent[300]
                    } !important`,
                },
                "& .pro-menu-item.active": {
                    color: `${
                        theme.palette.mode === "dark"
                            ? colors.greenAccent[400]
                            : colors.blueAccent[300]
                    } !important`,
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: isCollapsed ? "center" : "flex-end",
                        alignItems: "center",
                        padding: "8px",
                    }}
                >
                    <IconButton onClick={handleToggleSidebar}>
                        <MenuOutlinedIcon style={{
                            color: "white"
                        }} />
                    </IconButton>
                </Box>

                {!isCollapsed && (
                    <Box mb="25px">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img
                                alt="profile-user"
                                width="120"
                                height="120px"
                                src={profilePicture}
                                style={{ cursor: "pointer", borderRadius: "50%" }}
                            />
                        </Box>
                        <Box textAlign="center">
                            <Typography
                                variant="h2"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0" }}
                            >
                                Santos FC
                            </Typography>
                            <Typography
                                variant="h5"
                                color={
                                    theme.palette.mode === "dark"
                                        ? colors.greenAccent[500]
                                        : "white"
                                }
                            >
                                Santos Futebol Clube<br/>
                            </Typography>
                        </Box>
                    </Box>
                )}

                <Menu iconShape="square">
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems={isCollapsed ? "flex-start" : "flex-start"}
                    >
                        {/* Removed the Data and Pages headers when sidebar is collapsed */}


                        <Item
                            title="Home"
                            to="/Home"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />

                        {/* Removed Pages header when sidebar is collapsed */}
                        {!isCollapsed && (
                            <Typography
                                variant="h6"
                                color={
                                    theme.palette.mode === "dark" ? colors.grey[300] : "white"
                                }
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Páginas
                            </Typography>
                        )}

                        <Item
                            title="Registrar Jogador"
                            Link
                            to="/registrar-jogador"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Visualizar Jogadores"
                            to="/visualizar-jogadores"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                        <Item
                            title="Perfil"
                            to="/perfil"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;