import React from "react";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
} from "../page-container";
import { LinkTo } from "../contacts/contact-card";

export const Maklarinformation = () => {
    return (
        <PageContainer>
            <Heading>Mäklarinformation</Heading>
            <br />
            <SubHeading>allmänt</SubHeading>

            <Paragraph>
                <b>Ingår i avgiften</b>: Vatten, Internet och värme.
                <br />
                <b>Försäkring, bostadsrättstillägg</b>: Tecknas individuellt av
                medlemmen
                <br />
                <b>Tar föreningen ut överlåtelseavgift?</b>: Ja, 2.5 % av
                prisbasbelopp, betalas av köparen.
                <br />
                <b>Antal lägenheter i föreningen</b>: 73st
                <br />
                <b>Äger föreningen marken?</b>: Ja
                <br />
                <b>Är föreningen äkta eller oäkta?</b>: Äkta, 769617-1052
                <br />
                <b>Godkänns juridisk person?</b>: Nej
                <br />
                <b>Godkänner föreningen delat ägande?</b>: Ja, Minsta ägarandel
                10%
            </Paragraph>

            <Hr />

            <SubHeading>Fastigheten</SubHeading>

            <Paragraph>
                <b>Byggnadsår</b>: 2015
                <br />
                <b>Uppvärmning</b>: Fjärrvärme via radiatorer i lägenheterna.
                <br />
                <b>Ventilation</b>: Centralt ventilationsystem.
                <br />
                <b>EL</b>: Bostadsrättsinnehavaren ansvarar själv för
                elabonnemang.
                <br />
                <b>Hiss</b>: Ja
                <br />
                <b>Gemensamma utrymmen</b>: Lägenhetsförråd, cykelrum samt
                kombinerat barnvagnsrum och rullstolsrum. Föreningen äger inga
                lokaler.
                <br />
                <b>Trappstädning</b>: Ja, av städfirma
            </Paragraph>

            <Hr />

            <SubHeading>Avgiftsförändringar/renoveringar</SubHeading>

            <Paragraph>
                <b>Har föreningen några avgiftsförändringar planerade?</b>:
                Avgiften förväntas vara oförändrad 2022
                <br />
                <b>Kommande renoveringar?</b>: Inget planerat
                <br />
                <b>Nyligen gjorda renoveringar?</b>: Nybyggt
            </Paragraph>

            <Hr />

            <SubHeading>TV/Bredband</SubHeading>

            <Paragraph>Bredband, 1000/1000 Mbit/s ingår i avgiften</Paragraph>

            <Hr />

            <SubHeading>Parkering</SubHeading>

            <Paragraph>Erbjuds per förfrågan</Paragraph>

            <Hr />

            <SubHeading>El</SubHeading>

            <Paragraph>
                Bostadsrättsinnehavaren ansvarar själv för elabbonemang.
            </Paragraph>

            <Hr />

            <SubHeading>Ekonomi</SubHeading>

            <Paragraph>
                Vår ekonomiska förvaltare är BRF EKONOMEN I STOCKHOLM AB
                <br />
                De tillhandahåller mäklarbild samt sköter all hantering av
                överlåtelser, medlemsansökan, pantsättning mm.
            </Paragraph>

            <Hr />

            <SubHeading>
                Skicka medlemsansökningar, pantsättningar, överlåtelser mm till
            </SubHeading>

            <Paragraph>
                Brf Flygplansfabriken
                <br />
                ℅ Brf Ekonomen i Stockholm AB
                <br />
                Fredsgatan 13
                <br />
                149 30 NYNÄSHAMN
            </Paragraph>

            <LinkTo type={"Mail"}>info@brfekonomen.se</LinkTo>
            <LinkTo type={"Tel"}>08-588 85 740</LinkTo>
        </PageContainer>
    );
};
