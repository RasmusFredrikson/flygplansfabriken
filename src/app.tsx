import { Box, Container } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./404";
import { GlobalStyle } from "./mui-override";
import { Andrahandsuthyrning } from "./pages/apartment/andrahandsuthyrning";
import { Autogiro } from "./pages/apartment/autogiro";
import { Brandskyddsinformation } from "./pages/apartment/brandskyddsinformation";
import { Forandring } from "./pages/apartment/forandring";
import { Parkering } from "./pages/apartment/parkering";
import { Teknik } from "./pages/apartment/teknik";
import { Trivselregler } from "./pages/apartment/trivselregler";
import { Underhallsansvar } from "./pages/apartment/underhallsansvar";
import { AppMenu } from "./pages/app-menu";
import { Maklarinformation } from "./pages/brokers/maklarinformation";
import { Kontakter } from "./pages/contacts/Kontakter";
import { Hem } from "./pages/home/hem";
import { Felanmalan } from "./pages/report/felanmalan";
import { Dokument } from "./pages/tenant/dokument";
import { Medlemmar } from "./pages/tenant/medlemmar";

const App = () => (
    <Box style={{ background: "#cdcdcd" }}>
        <HashRouter>
            <AppMenu />

            <Container fixed maxWidth={"lg"}>
                <Box paddingY={15}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate replace to="/hem" />}
                        />

                        <Route path="/hem" element={<Hem />} />

                        <Route
                            path="/maklarinformation"
                            element={<Maklarinformation />}
                        />

                        <Route
                            path={"/boendeinformation/andrahandsuthyrning"}
                            element={<Andrahandsuthyrning />}
                        />

                        <Route
                            path={"/boendeinformation/teknik"}
                            element={<Teknik />}
                        />

                        <Route
                            path={"/boendeinformation/forandring-i-lgh"}
                            element={<Forandring />}
                        />

                        <Route
                            path={"/boendeinformation/parkering"}
                            element={<Parkering />}
                        />

                        <Route
                            path={"/boendeinformation/trivselregler"}
                            element={<Trivselregler />}
                        />

                        <Route
                            path={"/boendeinformation/underhallsansvar"}
                            element={<Underhallsansvar />}
                        />

                        <Route
                            path={"/boendeinformation/brandskyddsinformation"}
                            element={<Brandskyddsinformation />}
                        />

                        <Route
                            path={"/boendeinformation/autogiro"}
                            element={<Autogiro />}
                        />

                        <Route path="/felanmalan" element={<Felanmalan />} />

                        <Route
                            path="/styrelsen/medlemmar"
                            element={<Medlemmar />}
                        />

                        <Route
                            path="/styrelsen/document"
                            element={<Dokument />}
                        />

                        <Route path="/kontakt" element={<Kontakter />}></Route>

                        <Route element={<PageNotFound />}></Route>
                    </Routes>
                </Box>
            </Container>
        </HashRouter>
    </Box>
);

ReactDOM.render(
    <GlobalStyle>
        <App />
    </GlobalStyle>,
    document.getElementById("app"),
);
