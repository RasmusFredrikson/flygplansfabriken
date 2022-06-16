import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { PageNotFound } from "./404";
import { Hem } from "./pages/home/hem";
import { GlobalStyle } from "./mui-override";
import { AppMenu } from "./pages/app-menu";
import { Box, Container } from "@material-ui/core";
import { Maklarinformation } from "./pages/brokers/maklarinformation";
import { BrfBackground } from "./pages/brf-background";
import { Felanmalan } from "./pages/report/felanmalan";
import { Andrahandsuthyrning } from "./pages/apartment/andrahandsuthyrning";
import { Forandring } from "./pages/apartment/forandring";
import { Parkering } from "./pages/apartment/parkering";
import { Trivselregler } from "./pages/apartment/trivselregler";
import { Underhallsansvar } from "./pages/apartment/underhallsansvar";
import { Medlemmar } from "./pages/tenant/medlemmar";
import { Dokument } from "./pages/tenant/dokument";
import { Kontakter } from "./pages/contacts/Kontakter";
import { Teknik } from "./pages/apartment/teknik";

const App = () => (
    <BrfBackground>
        <HashRouter>
            <AppMenu />

            <Container fixed maxWidth={"lg"}>
                <Box paddingY={15}>
                    <Switch>
                        <Redirect exact to="/hem" from="/" />

                        <Route exact path="/hem">
                            <Hem />
                        </Route>

                        <Route path="/maklarinformation">
                            <Maklarinformation />
                        </Route>

                        <Route path={"/boendeinformation/andrahandsuthyrning"}>
                            <Andrahandsuthyrning />
                        </Route>

                        <Route path={"/boendeinformation/teknik"}>
                            <Teknik />
                        </Route>

                        <Route path={"/boendeinformation/forandring-i-lgh"}>
                            <Forandring />
                        </Route>

                        <Route path={"/boendeinformation/parkering"}>
                            <Parkering />
                        </Route>

                        <Route path={"/boendeinformation/trivselregler"}>
                            <Trivselregler />
                        </Route>

                        <Route path={"/boendeinformation/underhallsansvar"}>
                            <Underhallsansvar />
                        </Route>

                        <Route path="/felanmalan">
                            <Felanmalan />
                        </Route>

                        <Route path="/styrelsen/medlemmar">
                            <Medlemmar />
                        </Route>

                        <Route path="/styrelsen/document">
                            <Dokument />
                        </Route>

                        <Route path="/kontakt">
                            <Kontakter />
                        </Route>

                        <Route>
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Box>
            </Container>
        </HashRouter>
    </BrfBackground>
);

ReactDOM.render(
    <GlobalStyle>
        <App />
    </GlobalStyle>,
    document.getElementById("app"),
);
