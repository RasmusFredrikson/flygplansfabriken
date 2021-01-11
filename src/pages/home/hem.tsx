import React from "react";
import {Divider, Link, Typography} from '@material-ui/core';
import {Heading, PageContainer, Paragraph} from '../page-container';
import OVK2 from "../../assets/OVK2.pdf";

export const Hem = () => (
  <PageContainer>
    <Heading>
      Välkommen
    </Heading>

    <Paragraph>
      2015 färdigställde byggföretaget SSM Brf Flygplansfabriken i Midsommarkransen. Brf Flygplansfabriken består av 73 kvadratsmarta
      lägenheter om 1-2 rum. Bostäderna präglas av tidlös design och kvadrateffektiva ytor.
    </Paragraph>

    <br/>
    <Divider/>
    <br/>

    <Typography variant={"h6"} paragraph>
      Information från styrelsen 2021-01-11
    </Typography>

    <Paragraph>
      Hej,
      <br/><br/>
      Den 25 januari påbörjas del två av husets OVK - Obligatorisk VentilationsKontroll. Detta är något vi som föreningen enligt lag är
      skyldiga att genomföra. Företaget heter Ventkontroll i Sverige
      <br/><br/>
      Detta kommer pågå under dagarna Måndag 25/1 - Torsdag 28/1, flertal besök i just din lägenheter kan komma att göras beroende på jobb.
      Kontrollen börjar 08:00 och pågår fram till 17:00, de har inte möjlighet att anpassa sina besök efter önskemål om tid.
      <br/><br/>
      Det är viktigt att utföraren får tillgång till alla lägenheter för att föreningen ska få en godkänd OVK, du är varmt välkommen att
      vara hemma och om du inte är hemma låser du låset i serviceläge, klockan 10 serviceläge - samtliga dagar.
      <br/><br/>
      Bifogat är information gällande besiktningen samt serviceläge på dörren.
      Ha en fortsatt trevlig vecka!
      <br/><br/>
      <Link href={OVK2}>OVK 2021-01-25.pdf</Link>
      <br/><br/>
      Styrelsen
    </Paragraph>

  </PageContainer>
);
