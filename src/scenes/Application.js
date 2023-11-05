import React from "react";
import {Route, Routes} from "react-router-dom";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import Footer from "./global/Footer";
import Home from "./home";

const Application = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <div>
                            <Routes>
                                <Route path="/Home" element={<Home />} />
                            </Routes>
                        </div>
                        <Footer />
                    </main>
                </div>


            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default Application;