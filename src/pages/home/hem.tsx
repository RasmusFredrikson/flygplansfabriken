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
      Information från styrelsen 2021-03-24
    </Typography>

    <Paragraph>
      Hej alla boende i Brf Flygplansfabriken,Våren är här och nu kommer lite information
      <br/><br/>
      <b>Cykelställ</b>
      <br/>
      För att främja den aktiva cyklisten
      och skapa ordning i cykelrummet så kommer fasta cykelställ av modellen <b>semi-vertikalt</b> cykelställ att monteras. Det är en solid
      stålränna där båda hjulen placeras säkert och stabilt i varsin ficka, framhjulet lyfts upp mot vägen. Via en bygel kan ni sedan låsa
      fast cykeln. Beställt av Modulkonstruktion AB.
      <br/>
      Inför monteringen behöver cykelrummet vara tomt påcyklar, ni behöver parkera era cyklar på
      annan plats, ej i allmänna utrymmen. De cyklarsom står kvar kommer att skänkas till Röda korset för vidare försäljning.
      <br/>
      Om du redan nu vet att du inte längre vill ha kvar dincykel, vänligen meddela oss. Detta gäller mellan20 april 18:00 till 23 april
      14:00som cykelrummet inte är i bruk förparkering.
      <br/><br/>
      <b>Fasadtvätt</b>
      <br/>
      Fastigheten är nu 6 år gammal och fasaden har under dessa år blivit lortig. Vi kommer därför att genomföra en fasadtvätt.
      <br/><br/>
      Med hjälp av vatten och sky-lift så tvättas fasaden samt att balkongerna spolas av med
      högtryckstvätt. Därmed behöver ni tömma era balkonger på lösa föremål såsom blommor, krukor, ljusslingorsamt övriga föremål som
      tar skada. Det går bra att möbler står kvar, men har ni möjlighet att ta in dessa så är det att rekommendera, för att undvika skador
      samt att jobbet blir bättre och enklare utfört.
      <br/><br/>
      Skyliften kommer bland annat att stå på parkeringarna och vi ber om överseende med detta.
      Efter tvättningen är det fritt fram att göra vårfint på era balkonger och putsa fönstrena.
      <br/><br/>
      Tvättningen kommer pågå dagtid 7-15 apriloch genomförs av Fasadmetoder AB. Kom ihågatt stänga fönster och dörrar, desto längre ner i
      huset ni bor desto mer vatten.
      <br/><br/>
      <b>Rabatterna</b>
      <br/>
      Efter att fasaden är ren och allt vatten torkat upp så kommer Ljuva trädgård från Aspudden piffa upp våra rabatter samt ansvara
      förskötsel
      under kommande säsong.
      <br/><br/>
      <b>Försäkringsbolag</b>
      <br/>
      Från och med 1 maj byter vi försäkringsbolag till Protector. Arbete med återvinningsstation och
      laddstolpar påparkeringen pågår för fullt, om ni har några synpunkter gällande det är ni välkommen att maila in.
      <br/>
      Som vanligt finns vi
      tillgängliga på mail och snartkommer inbjudan till årets årsstämma, tills dess önskar vi en fin vår och snart en Glad Påsk.
      StyrelsenBrf

      <br/><br/>
      Flygplansfabriken
      <br/>
      Jesper, Malin, Fredrik, Quang, Albin
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
