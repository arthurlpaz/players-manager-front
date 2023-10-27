import React from "react";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./global/Sidebar";

const Application = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                </div>


            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default Application;