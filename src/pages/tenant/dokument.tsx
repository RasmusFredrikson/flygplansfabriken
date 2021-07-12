import React from 'react';
import {Heading, Hr, PageContainer, Paragraph, SubHeading} from '../page-container';
import {Box, Link} from '@material-ui/core';
import stadgar2019 from "../../assets/stadgar2019.pdf";
import ar2020 from "../../assets/2020.pdf"
import ar2019 from "../../assets/2019.pdf"
import ar2018 from "../../assets/2017-2018.pdf";
import ar2017 from "../../assets/2016-2017.pdf";
import andrahand from "../../assets/andrahand.pdf"
import bostadsandring from "../../assets/bostadsandring.pdf"

export const Dokument = () => {
  return (
    <PageContainer>
      <Heading>
        Dokument
      </Heading>

      <Box marginY={5}/>

      <SubHeading>
        Stadgar
      </SubHeading>

      <Paragraph>
        <Link href={stadgar2019}>Stadgar.pdf</Link>
      </Paragraph>

      <Hr/>

      <SubHeading>
        Årsredovisningar
      </SubHeading>

      <Paragraph>
        <Link href={ar2020}>Årsredovisning 2020.pdf</Link>
      </Paragraph>

      <Paragraph>
        <Link href={ar2019}>Årsredovisning 2019.pdf</Link>
      </Paragraph>

      <Paragraph>
        <Link href={ar2018}>Årsredovisning 2018.pdf</Link>
      </Paragraph>

      <Paragraph>
        <Link href={ar2017}>Årsredovisning 2017.pdf</Link>
      </Paragraph>

      <Hr/>

      <SubHeading>
        Ansökan andrahandsuthyrning
      </SubHeading>

      <Paragraph>
        <Link href={andrahand}>Andrahandsuthyrning.pdf</Link>
      </Paragraph>

      <Hr/>

      <SubHeading>
        Ansökan om tillstånd för ändring i bostadsrättslägenhet.
      </SubHeading>

      <Paragraph>
        <Link href={bostadsandring}>Bostadsändring.pdf</Link>
      </Paragraph>
    </PageContainer>
  );
};
