import React from 'react';
import {Heading, Hr, PageContainer, Paragraph, SubHeading} from '../page-container';
import {Box, Link} from '@material-ui/core';

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
        <Link href="../../assets/stadgar2019.pdf">Stadgar.pdf</Link>
      </Paragraph>

      <Hr/>

      <SubHeading>
        Årsredovisningar
      </SubHeading>

      <Paragraph>
        <Link href="../../assets/2019.pdf">Årsredovisning 2019.pdf</Link>
      </Paragraph>

      <Paragraph>
        <Link href="../../assets/2017-2018.pdf">Årsredovisning 2018.pdf</Link>
      </Paragraph>

      <Paragraph>
        <Link href="../../assets/2016-2017.pdf">Årsredovisning 2017.pdf</Link>
      </Paragraph>

      <Hr/>

      <SubHeading>
        Ansökan andrahandsuthyrning
      </SubHeading>

      <Paragraph>
        <Link href="../../assets/andrahand.pdf">Andrahandsuthyrning.pdf</Link>
      </Paragraph>

      <Hr/>

      <SubHeading>
        Ansökan om tillstånd för ändring i bostadsrättslägenhet.
      </SubHeading>

      <Paragraph>
        <Link href="../../assets/bostadsandring.pdf">Bostadsändring.pdf</Link>
      </Paragraph>
    </PageContainer>
  );
};
