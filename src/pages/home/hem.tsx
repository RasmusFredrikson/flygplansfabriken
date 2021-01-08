import React from "react";
import {Divider, Typography} from '@material-ui/core';
import {PageContainer, Heading, Paragraph} from '../page-container';

export const Hem = () => (
  <PageContainer>
    <Heading>
      Välkommen
    </Heading>

    <Paragraph>
      2016 färdigställde byggföretaget Besqab Brf Estrid i Täby Centrum. Brf Estrid består av kvadratsmarta lägenheter om 1-5 rum.
      Bostäderna präglas av tidlös industridesign och stora fönsterpartier, genomtänkta detaljer och rejäla material.
    </Paragraph>

    <br/>
    <Divider/>
    <br/>

    <Typography variant={"h6"} paragraph>
      Information från ordförande 2020-04-23
    </Typography>

    <Paragraph>
      Ytterligare ett spännande år har gått och det är dags för ordinarie föreningsstämma i Brf Estrid igen. Under de senaste tre
      månaderna har det blivit tydligt hur svårt det är att förutse vad som kommer ske i framtiden. Corona, covid-19, har ändrat vårt sätt
      att leva, tänka och påverkat hela världen på ett sätt som var väldigt svårt att förutse.
    </Paragraph>

    <Paragraph>
      Vi kommer att genomföra vår föreningsstämma som planerat onsdagen den 13:e maj, men vi kommer naturligtvis att beakta och följa de
      riktlinjer som finns för begränsad smittspridning. Vi har en stor lokal där vi inte behöver sitta tätt inpå varandra och vi serverar
      denna gång heller inget kaffe eller liknande.
    </Paragraph>

    <Paragraph>
      Många av oss har bott här nästan fyra år, men många nya har också tillkommit och jag vill än en gång be alla att hjälpas åt att
      vårda och verka för att vår fastighet hålls fräsch. Följ och respektera de instruktioner som finns för tvättstuga, soprum, garage,
      innergård, etc. Vi tillsammans äger hela fastigheten och betalar gemensamt för dess skötsel och underhåll.
    </Paragraph>

    <Paragraph>
      Styrelsens ambition är fortsatt att hålla i kostnaderna, amortera på våra lån samt att inte höja månadsavgifterna, utan att göra
      avkall på service och underhåll i vår fastighet.
    </Paragraph>

    <Paragraph>
      I den ekonomiska planen som Besqab tog fram i samband med försäljningen antog man och planerade för en årlig avgiftshöjning på 2%.
      För fjärde året i rad har vi inte höjt avgifterna och under 2019 amorterade vi 898 000 kr, vilket är 800 000 mer än den i ekonomiska
      planen. Låga räntor och lägre driftkostnader är de huvudsakliga anledningarna till ett förhållandevis positivt resultat i Brf
      Estrid. Då nuvarande intäkter räcker för att betala löpande kostnader och amorteringar finns för närvarande inget behov av att höja
      avgifterna under 2020.
    </Paragraph>

    <Paragraph>
      Den 13:e maj kl 19:00 håller vi årsstämma i Brf Estrid och jag hoppas att så många som möjligt kan närvara.
    </Paragraph>

    <Paragraph>
      Torbjörn Olsson
      Ordförande. Brf Estrid
    </Paragraph>

  </PageContainer>
);
