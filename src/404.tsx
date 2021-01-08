import React from "react";
import {Box, Grid, Typography} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import {Appear} from './animation/appear';

export const PageNotFound = () => (
  <Appear>
    <Grid container spacing={4} justify={'center'}>
      <Grid item>
        <Box marginTop={10}>
          <Typography variant={'h3'} gutterBottom>
            HOPPSAN!
          </Typography>

          <Typography variant={'subtitle1'} gutterBottom color={'textSecondary'}>
            Vi hittade inte sidan du söker. Det kan bero på ett stavfel, att sidan inte längre finns eller att den flyttats.
          </Typography>

          <NavLink to="/hem">
            Tillbaka till startsidan
          </NavLink>
        </Box>
      </Grid>
    </Grid>
  </Appear>
);
