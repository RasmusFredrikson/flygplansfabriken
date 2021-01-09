import React from 'react';
import {Heading, Hr, PageContainer, Paragraph, SubHeading, Warn} from '../page-container';
import contacts from "./contacts.json";
import {LinkTo} from './contact-card';
import {Link} from '@material-ui/core';

const {Fastighetsservice, styrelsen, accounting, parking, elevator, lockService} = contacts;
export const Kontakter = () => {
  return (
    <PageContainer>
      <Heading>
        Kontaktuppgifter
      </Heading>

      <SubHeading>
        Styrelsen
      </SubHeading>

      <Paragraph>
        E-post: <LinkTo type={'Mail'}>{styrelsen.email}</LinkTo>
        <br/>
        Du kan även lägga meddelanden i styrelsens postfack i entrén.
      </Paragraph>

      <Hr/>

      <SubHeading>
        Fel i fastigheten – Port, dörr mm.
      </SubHeading>

      <Paragraph>
        <b>Kontakta</b> {Fastighetsservice.name}
        <br/>
        Telefon: <LinkTo type={'Tel'}>{Fastighetsservice.phone[0].number}</LinkTo> ({Fastighetsservice.phone[0].openingHours})
        <br/>
        Telefon: <LinkTo type={'Tel'}>{Fastighetsservice.phone[1].number}</LinkTo> ({Fastighetsservice.phone[1].openingHours})
        <br/>
        Webbsida för felamnälan: <Link href={Fastighetsservice.homePage}>{Fastighetsservice.homePage}</Link>
        <br/>
        E-post: <LinkTo type={'Mail'}>{Fastighetsservice.email}</LinkTo>
        <br/><br/>
        Du kan också kontakta styrelsen
        E-post: <LinkTo type={'Mail'}>{styrelsen.email}</LinkTo>
        <br/>
        När du har gjort din felanmälan gällande fel i gemensamma utrymmen kan det vara bra att sätta upp en lapp på anslagstavlan om att
        felanmälan är gjord som en information till dina grannar.
      </Paragraph>

      <Hr/>

      <SubHeading>
        Felanmälan jour – ärenden av akut karaktär
      </SubHeading>

      <Paragraph>
        <b>Kontakta</b> {Fastighetsservice.name}
        <br/>
        Telefon: <LinkTo type={'Tel'}>{Fastighetsservice.phone[0].number}</LinkTo> ({Fastighetsservice.phone[0].openingHours})
        <br/>
        Telefon: <LinkTo type={'Tel'}>{Fastighetsservice.phone[1].number}</LinkTo> ({Fastighetsservice.phone[1].openingHours})
      </Paragraph>

      <Hr/>

      <SubHeading>
        Fel i din lägenhet
      </SubHeading>

      <Paragraph>
        <b>Kontakta</b> {Fastighetsservice.name}
        <br/>
        Telefon: <LinkTo type={'Tel'}>{Fastighetsservice.phone[0].number}</LinkTo> ({Fastighetsservice.phone[0].openingHours})
        <br/>
        Telefon: <LinkTo type={'Tel'}>{Fastighetsservice.phone[1].number}</LinkTo> ({Fastighetsservice.phone[1].openingHours})
        <br/>
        Webbsida för felamnälan: <Link href={Fastighetsservice.homePage}>{Fastighetsservice.homePage}</Link>
        <br/>
        E-post: <LinkTo type={'Mail'}>{Fastighetsservice.email}</LinkTo>
      </Paragraph>
      <Warn>
        Observera att bostadsrättsinnehavaren ansvarar för fel på sin enskilda lägenhet. Det går bra att kontakta Fastighetsskötsel, men om
        felet inte täcks av föreningens ansvar debiteras bostadsrättsinnehavaren för arbetskostnaden.
      </Warn>

      <Hr/>

      <SubHeading>
        Avgifter och avier
      </SubHeading>

      <Paragraph>
        <b>Logga in</b> på <Link href={accounting.homepage}>mina sidor</Link> hos {accounting.name}
      </Paragraph>

      <Hr/>

      <SubHeading>
        Parkeringsplatser och tillstånd utomhus
      </SubHeading>

      <Paragraph>
        <b>Kontakta</b> {accounting.name}
        E-post: <LinkTo type={'Mail'}>{accounting.email}</LinkTo>
      </Paragraph>

      <Hr/>

      <SubHeading>
        Felparkerade bilar utomhus
      </SubHeading>

      <Paragraph>
        <b>Kontakta</b> {parking.name}
        <br/>
        Telefon: <LinkTo type={'Tel'}>{parking.phone[0].number}</LinkTo>
        <br/>
        Uppge adress, ditt telefonnummer och vad ärendet gäller, t.ex. om någon har parkerat på din plats.
      </Paragraph>

      <Hr/>

      <SubHeading>
        Fel på hiss
      </SubHeading>

      <Paragraph>
        <b>Kontakta</b> {elevator.name}
        <br/>
        Telefon: <LinkTo type={'Tel'}>{elevator.phone[0].number}</LinkTo>
      </Paragraph>

      <Hr/>

      <SubHeading>
        Borttappade nycklar
      </SubHeading>

      <Paragraph>
        <b>Kontakta</b> {lockService.name}
        <br/>
        Telefon: <LinkTo type={'Tel'}>{lockService.phone[0].number}</LinkTo>
      </Paragraph>
    </PageContainer>
  );
};
