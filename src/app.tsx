import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {PageNotFound} from './404';
import {Hem} from './pages/home/hem';
import {GlobalStyle} from './mui-override';
import {AppMenu} from './pages/app-menu';
import "./styling/main.scss";
import {Box, Container} from '@material-ui/core';
import {Maklarinformation} from './pages/brokers/maklarinformation';

const App = () => (
  <HashRouter>
    <AppMenu/>

    <Container fixed maxWidth={'lg'}>
      <Box paddingY={15}>
        <Switch>
          <Redirect exact to="/hem" from="/"/>

          <Route exact path="/hem">
            <Hem/>
          </Route>

          <Route path="/maklarinformation">
            <Maklarinformation/>
          </Route>

          <Route path="/boendeinformation">
            boendeinformation
          </Route>

          <Route path="/felanmalan">
            felanmalan
          </Route>

          <Route path="/styrelsen/medlemmar">
            medlemmar
          </Route>

          <Route path="/styrelsen/document">
            document
          </Route>

          <Route path="/kontakt">
            kontakt
          </Route>

          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
      </Box>
    </Container>
  </HashRouter>
);

ReactDOM.render(
  <GlobalStyle>
    <App/>
  </GlobalStyle>,
  document.getElementById("app"),
);
