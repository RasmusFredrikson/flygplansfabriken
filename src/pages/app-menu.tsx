import { Menu } from "@mui/icons-material";
import {
    AppBar,
    Avatar,
    Box,
    Container,
    Hidden,
    IconButton,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { MobileMenu, NavMenu, SingleLink } from "./nav-menu";

export const AppMenu = () => {
    const theme = useTheme();
    const [openMobileMenu, setMobileMenu] = useState(false);

    return (
        <AppBar position={"sticky"}>
            <Container>
                <Toolbar disableGutters>
                    <Avatar
                        variant={"square"}
                        style={{
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        <b>F</b>
                    </Avatar>
                    <Typography
                        variant={"h6"}
                        style={{ fontSize: 14, fontWeight: "bold" }}
                        color={"primary"}
                    >
                        lygplansfabriken
                    </Typography>

                    <Box display="flex" marginLeft="auto">
                        <Hidden mdDown>
                            <SingleLink path="/hem" name="Hem" />
                            <SingleLink
                                path="/maklarinformation"
                                name="Mäklarinformation"
                            />
                            <NavMenu
                                path="/boendeinformation"
                                name="Boendeinformation"
                                subMenu={[
                                    {
                                        name: "Andrahandsuthyrning",
                                        path: "/boendeinformation/andrahandsuthyrning",
                                    },
                                    {
                                        name: "Parkering",
                                        path: "/boendeinformation/parkering",
                                    },
                                    {
                                        name: "teknik",
                                        path: "/boendeinformation/teknik",
                                    },
                                    {
                                        name: "Förändring i lgh",
                                        path: "/boendeinformation/forandring-i-lgh",
                                    },
                                    {
                                        name: "Trivselregler",
                                        path: "/boendeinformation/trivselregler",
                                    },
                                    {
                                        name: "Underhållsansvar",
                                        path: "/boendeinformation/underhallsansvar",
                                    },
                                    {
                                        name: "Brandskyddsinformation",
                                        path: "/boendeinformation/brandskyddsinformation",
                                    },
                                    {
                                        name: "Autogiro",
                                        path: "/boendeinformation/autogiro",
                                    },
                                ]}
                            />
                            <SingleLink path="/felanmalan" name="Felanmälan" />

                            <NavMenu
                                name="styrelsen"
                                path="/styrelsen"
                                subMenu={[
                                    {
                                        name: "Styrelsemedlemmar",
                                        path: "/styrelsen/medlemmar",
                                    },
                                    {
                                        name: "Dokument",
                                        path: "/styrelsen/document",
                                    },
                                ]}
                            />

                            <SingleLink path="/kontakt" name="Kontakt" />
                        </Hidden>

                        <Hidden mdUp>
                            <IconButton
                                edge="start"
                                color="primary"
                                aria-label="menu"
                                onClick={() => setMobileMenu(!openMobileMenu)}
                            >
                                <Menu />
                            </IconButton>
                        </Hidden>

                        <MobileMenu
                            menus={[
                                { name: "Hem", path: "/hem" },
                                {
                                    name: "Mäklarinformation",
                                    path: "/maklarinformation",
                                },
                                {
                                    name: "Boendeinformation",
                                    path: "/boendeinformation",
                                    subMenu: [
                                        {
                                            name: "Andrahandsuthyrning",
                                            path: "/boendeinformation/andrahandsuthyrning",
                                        },
                                        {
                                            name: "Parkering",
                                            path: "/boendeinformation/parkering",
                                        },
                                        {
                                            name: "teknik",
                                            path: "/boendeinformation/teknik",
                                        },
                                        {
                                            name: "Förändring i lgh",
                                            path: "/boendeinformation/forandring-i-lgh",
                                        },
                                        {
                                            name: "Trivselregler",
                                            path: "/boendeinformation/trivselregler",
                                        },
                                        {
                                            name: "Underhållsansvar",
                                            path: "/boendeinformation/underhallsansvar",
                                        },
                                    ],
                                },
                                { name: "Felanmälan", path: "/felanmalan" },
                                {
                                    name: "styrelsen",
                                    path: "/styrelsen",
                                    subMenu: [
                                        {
                                            name: "Styrelsemedlemmar",
                                            path: "/styrelsen/medlemmar",
                                        },
                                        {
                                            name: "Dokument",
                                            path: "/styrelsen/document",
                                        },
                                    ],
                                },
                                { name: "Kontakt", path: "/kontakt" },
                            ]}
                            isOpen={openMobileMenu}
                            onClose={() => setMobileMenu(false)}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
