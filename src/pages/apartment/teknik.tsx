import React from 'react';
import {Heading, Hr, PageContainer, Paragraph, SubHeading, Warn} from '../page-container';
import {Link} from '@material-ui/core';
import bredband from "../../assets/bredband-tv.pdf"

export const Teknik = () => {
  return (
    <PageContainer>
      <Heading>
        Teknik
      </Heading>

      <SubHeading>
        Bredband och TV
      </SubHeading>

      <Paragraph>
        Bredband 1000/1000 Mbit/s ingår i hyran. Klicka <Link href={bredband}>här</Link> för mer information om hur du
        kan komma igång med Bahnhof bredband.
        <br/><br/>
        IT-delen av skåpet innehåller en inkommande nätverksport avsedd för uppkoppling mot router för användning efter egen önskan, samt
        möjlighet att patcha vidare till portar i lägenheten.
        <br/><br/>
        Router samt övrig aktiv utrustning tillhandahålls av bostadsrättsägare.
        <br/><br/>
        Tv-abonnemang finns att beställt hos <Link href="https://www.serverado.se">Serverado</Link>
      </Paragraph>

      <Hr/>

      <SubHeading>
        El
      </SubHeading>

      <Paragraph>
        Elnätsbolag är Ellevio levererar el till fastigheten, elhandelsbolag väljer bostadsrättsinnehavaren fritt efter eget önskemål.
        <br/><br/>
        I lägenheten finns en kombinerad gruppcentral/IT-skåp med huvudbrytare, automatsäkringar och jordfelsbrytare för hela lägenheten.
        <br/><br/>
        Belysningsarmaturer finns i badrumsskåp och under överskåp i kök (bänkbelysning). I övriga rum är det lamputtag i tak. Underhåll och
        bytte lampor ansvarar bostadsrättsinnehavare för.
      </Paragraph>

      <Hr/>

      <SubHeading>
        Värme och ventilation
      </SubHeading>

      <Paragraph>
        <b>Värnme</b>
        <br/>
        Ert värmesystem består av vattenburna radiatorer som värms upp centralt med fjärrvärme och där vi har en återvinning på
        ventilationen.
        <br/><br/>
        Radiatorerna styrs centralt så att rätt temperatur uppfylls i lägenheten, på respektive radiator sitter en termostat, den ska stå
        fullt öppen. Om ni önskar lägre temperatur i rummet så vrider ni ned termostaten lite åt gången och avvaktar.
        <br/><br/>
        Termostaten stänger värmetillförseln i radiatorn när det är rätt temperatur i rummet vilket innebär att radiatorerna ofta känns
        kalla, vilket inte är
        något fel så länge det är rätt temperatur i rummet.
      </Paragraph>

      <Paragraph>
        <b>Golvvärme</b>
        <br/>
        Badrummet är i vissa lägenheter försett med komfortgolvvärme. Denna styrs via en termostat som sitter på väggen i badrummet och
        debiteras per lägenhetens elmätare.
      </Paragraph>
      <Warn>
        Varning, inga infästningar får utföras i badrums golvet då värmeslingorna kan skadas samt tätskiktet förstörs.
      </Warn>

      <Paragraph>
        <b>Ventilation</b>
        <br/>
        Tilluften i lägenheten kommer via tilluftsdon i yttervägg i sovrum och vardagsrum. Frånluftsventilation i din lägenhet tas ut i
        badrum och köket.
        <br/><br/>
        Frånluft sker i köket via <b>fläktkåpan</b>. Denna har ingen egen motor utan är grundinställd från centralt fläkt och när du ska
        laga mat
        så vrider du upp donetsom gör att flödet ökas. Det är alltså på eller av och inga mellanlägen finns.
        <br/><br/>
        <b>Obs!</b> Om du avser att byta fläktkåpa så tänkt på att det inte går att installera en köksfläkt med motor som kommer att
        motverka det
        centrala systemet.
        Rengöring av fläktkåpan bör göras cirka en gång per månad vid daglig användning. Fläktkåpan har ett filter.
        <br/><br/>
        Donen för tilluft och frånluft är inställda på ett visst flöde och det är viktigt att inte röra dessa då det då blir obalans i
        lägenhetens ventilation.
        <br/><br/>
        Vid vädring – gör det snabbt och effektivt. Öppna en fönster eller fönsterdörr på vid gavel under en kortare stund. Ställ inte
        fönster på glänt under en längre tid. Detta för att spara på värmeenergin i huset.
      </Paragraph>

      <Hr/>

      <SubHeading>
        Vatten och avlopp
      </SubHeading>

      <Paragraph>
        Avstängningsventiler för hela din lägenhet finns i badrummet/WC-dusch placerad på schaktet/i vägg. Om vattenläckage skulle uppstå är
        det viktigt att du omedelbart vrider av båda ventilerna för inkommande vatten i lägenheten, den ena ventilen för kallvatten och den
        andra för varmvatten.
        <br/><br/>
        Det finns också mindre avstängningsventiler monterade på flertalet av rören försörjande blandare i din lägenhet. Dessa kan användas
        vid underhåll och reparation av enheterna.
      </Paragraph>
    </PageContainer>
  );
};
