import React, {useState} from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme
} from '@material-ui/core';
import {Inbox, Mail, Menu} from '@material-ui/icons';
import {NavMenu, SingleLink} from './nav-menu';

export const AppMenu = () => {
  const theme = useTheme();
  const [openMobileMenu, setMobileMenu] = useState(false);

  return (
    <AppBar position={'sticky'}>
      <Container>
        <Toolbar disableGutters>
          <Avatar variant={'square'} style={{backgroundColor: theme.palette.secondary.main}}><b>F</b></Avatar>
          <Typography variant={'h6'} style={{fontSize: 14, fontWeight: "bold"}} color={"primary"}>
            lygplansfabriken
          </Typography>


          <Box display="flex" marginLeft="auto">
            <Hidden smDown>
              <SingleLink path="/hem" name="Hem"/>
              <SingleLink path="/maklarinformation" name="Mäklarinformation"/>
              <NavMenu name="Boendeinformation" subMenu={[
                {
                  name: "Andrahandsuthyrning",
                  path: "/boendeinformation/andrahandsuthyrning"
                }, {
                  name: "Parkering",
                  path: "/boendeinformation/parkering"
                }, {
                  name: "teknik",
                  path: "/boendeinformation/teknik"
                }, {
                  name: "Förändring i lgh",
                  path: "/boendeinformation/forandring-i-lgh"
                }, {
                  name: "Trivselregler",
                  path: "/boendeinformation/trivselregler"
                }, {
                  name: "Underhållsansvar",
                  path: "/boendeinformation/underhallsansvar"
                }
              ]}/>
              <SingleLink path="/felanmalan" name="Felanmälan"/>

              <NavMenu name="styrelsen" subMenu={[{
                name: "Styrelsemedlemmar",
                path: "/styrelsen/medlemmar"
              }, {
                name: "Dokument",
                path: "/styrelsen/document"
              }]}/>

              <SingleLink path="/kontakt" name="Kontakt"/>
            </Hidden>

            <Hidden mdUp>
              <IconButton edge="start" color="primary" aria-label="menu" onClick={() => setMobileMenu(!openMobileMenu)}>
                <Menu/>
              </IconButton>
            </Hidden>

            <Drawer anchor={'right'} open={openMobileMenu} onClose={() => setMobileMenu(false)}>
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <Inbox/> : <Mail/>}</ListItemIcon>
                    <ListItemText primary={text}/>
                  </ListItem>
                ))}
              </List>
              <Divider/>
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <Inbox/> : <Mail/>}</ListItemIcon>
                    <ListItemText primary={text}/>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
