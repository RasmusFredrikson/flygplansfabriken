import React from 'react';
import {Heading, Hr, PageContainer, Paragraph, SubHeading} from '../page-container';
import {LinkTo} from '../contacts/contact-card';
import contacts from "../contacts/contacts.json";
import {Link, Typography} from '@material-ui/core';
import bostadsandring from "../../assets/bostadsandring.pdf"

export const Forandring = () => {
  return (
    <PageContainer>
      <Heading>
        Förändring i lägenheten
      </Heading>

      <Paragraph>
        Mindre förändringar får göras i lägenheten. Du får t ex lägga nya golv, sätta upp nya skåp eller byta ut vitvaror i kök och badrum.
        Alla arbeten skall utföras fackmannamässigt. Mer omfattande förändringar kräver dock styrelsens tillstånd, t ex om Du vill ta ner en
        vägg, dra nya rör i kök och badrum. Ibland kan det också behövas bygglov för att utföra vissa åtgärder i lägenheten. Kontakta alltid
        styrelsen innan Du sätter igång! Tänk också på att ta hänsyn till de omkringboende när Du utför bullerstörande arbeten i lägenheten.
        Dessa bör i första hand utföras under dagtid.
      </Paragraph>

      <Paragraph>
        Bostadsrättshavaren får inte utan styrelsens tillstånd utföra åtgärder i lägenheten som innefattar
      </Paragraph>

      <ul>
        <li>
          <Typography variant={'body1'}>Ingrepp i bärande konstruktion</Typography>
        </li>

        <li>
          <Typography variant={'body1'}>Ändring av eller anslutning till befintliga ledningar för avlopp, värme, gas, vatten, ventilation
            eller</Typography>
        </li>

        <li>
          <Typography variant={'body1'}>Annan väsentlig förändring av lägenheten</Typography>
        </li>
      </ul>

      <Hr/>

      <SubHeading>
        SÅ HÄR ANSÖKER DU
      </SubHeading>

      <Paragraph>
        För att ansöka om att ändringar av din bostad behöver du fylla i <Link href={bostadsandring}>Ansökan om tillstånd
        för ändring i bostadsrättslägenhet</Link>. Ansökan
        skickas till <LinkTo type={'Mail'}>{contacts.styrelsen.email}</LinkTo>
        <br/><br/>
        Förändringar ska alltid utföras på ett fackmannamässigt sätt.
      </Paragraph>
    </PageContainer>
  );
};
