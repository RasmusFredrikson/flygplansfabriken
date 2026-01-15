import { Box, Link } from "@mui/material";
import React from "react";
import { LinkTo } from "../contacts/contact-card";
import { accounting } from "../contacts/contacts.json";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
} from "../page-container";

export const Maklarinformation = () => {
    return (
        <PageContainer>
            <Heading>Mäklar-information</Heading>
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
                <br />
                <b>Fastighetens energiklass</b>: D, Energideklarationen utförd
                2020-05-12
            </Paragraph>

            <Hr />

            <SubHeading>Avgiftsförändringar / renoveringar</SubHeading>

            <Paragraph>
                <b>Har föreningen några avgiftsförändringar planerade?</b>:
                Avgiftsändringar kommuniceras via mail till föreningens
                medlemmar.
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
                Bostadsrättsinnehavaren ansvarar själv för elabonnemang.
            </Paragraph>

            <Hr />

            <SubHeading>Ekonomi</SubHeading>

            <Paragraph>
                Vår ekonomiska förvaltare är {accounting.name}
                <br />
                De tillhandahåller mäklarbild samt sköter all hantering av
                överlåtelser, medlemsansökan, pantsättning, m.m.
            </Paragraph>

            <Hr />

            <SubHeading>Pantsättningshandlingar</SubHeading>

            <Paragraph>
                Pantsättningshandlingar ska postas till:
                <Box marginLeft={"10px"} marginTop={"10px"}>
                    <b>Brf Flygplansfabriken</b>
                    <br />
                    Nabo 110192, Box 843
                    <br />
                    851 23 Sundsvall
                </Box>
            </Paragraph>

            <Paragraph>
                Vid eventuella frågor om pantnoteringar, vänligen kontakta:{" "}
                <LinkTo type={"Mail"}>panter@nabo.se</LinkTo>.
            </Paragraph>

            <Hr />

            <SubHeading>Mäklarbild och överlåtelseavtal</SubHeading>

            <Paragraph>
                Mäklarbild samt överlåtelseavtal hanteras genom{" "}
                <Link target="_blank" href={accounting.hrefs.maklarservice}>
                    Nabos mäklarservice
                </Link>
                .
                <br />
                Frågor utöver detta hänvisas till Nabos{" "}
                <Link href={accounting.hrefs.contactUs} target="_blank">
                    kontaktformulär
                </Link>{" "}
                eller mail till{" "}
                <LinkTo type={"Mail"}>{accounting.email}</LinkTo>.
            </Paragraph>
        </PageContainer>
    );
};
