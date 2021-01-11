import React from "react";
import {Container, Typography} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import {PageContainer} from './pages/page-container';

export const PageNotFound = () => (
  <PageContainer>
    <Container maxWidth={'md'}>
      <Typography variant={'h3'} gutterBottom>
        HOPPSAN!
      </Typography>

      <Typography variant={'subtitle1'} gutterBottom color={'textSecondary'}>
        Vi hittade inte sidan du söker. Det kan bero på ett stavfel, att sidan inte längre finns eller att den flyttats.
      </Typography>

      <NavLink to="/hem">
        Tillbaka till startsidan
      </NavLink>
    </Container>
  </PageContainer>
);
