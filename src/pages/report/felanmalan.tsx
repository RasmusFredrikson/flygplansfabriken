import React from "react";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
    Warn,
} from "../page-container";
import { LinkTo } from "../contacts/contact-card";
import contacts from "../contacts/contacts.json";
import { Link } from "@mui/material";

export const Felanmalan = () => {
    return (
        <PageContainer>
            <Heading>Felanmälan</Heading>

            <Paragraph>
                Nedan finner du information om vart du ska vända dig om du vill
                göra en felanmälan på något som hör till fastigheten eller din
                bostad. Det åligger var och en att anmäla ett fel som man
                upptäckt.
                <br />
                <br />
                Föreningen har för närvarande avtal med bolaget
                Fastighetsskötsel AB rörande fastighetsskötsel.
                Fastighetsskötsel AB har en veckovis tillsyn av fastigheten. Då
                åtgärdas också de fel som är anmälda, såvida felet inte är av
                akut karaktär.
                <br />
                <br />
                Är du osäker på något eller om du har du några frågor kring
                felanmälan är du välkommen att kontakta styrelsen på{" "}
                <LinkTo type={"Mail"}>{contacts.styrelsen.email}</LinkTo>
            </Paragraph>

            <Hr />

            <SubHeading>Fel i fastigheten – Port, dörr mm.</SubHeading>

            <Paragraph>
                <b>Kontakta</b> <br /> {contacts.Fastighetsservice.name}
                <br />
                Telefon:{" "}
                <LinkTo type={"Tel"}>
                    {contacts.Fastighetsservice.phone[0].number}
                </LinkTo>{" "}
                ({contacts.Fastighetsservice.phone[0].openingHours})
                <br />
                Webbsida för felamnälan:{" "}
                <Link
                    color={"secondary"}
                    href={contacts.Fastighetsservice.homePage}
                    underline="hover">
                    {contacts.Fastighetsservice.homePage}
                </Link>
                <br />
                E-post:{" "}
                <LinkTo type={"Mail"}>
                    {contacts.Fastighetsservice.email}
                </LinkTo>
                <br />
                Du kan också kontakta styrelsen E-post:{" "}
                <LinkTo type={"Mail"}>{contacts.styrelsen.email}</LinkTo>
                <br />
                <br />
                När du har gjort din felanmälan gällande fel i gemensamma
                utrymmen kan det vara bra att sätta upp en lapp på anslagstavlan
                om att felanmälan är gjord som en information till dina grannar.
            </Paragraph>

            <Hr />

            <SubHeading>Felanmälan jour – Ärenden av akut karaktär</SubHeading>

            <Paragraph>
                Telefon:{" "}
                <LinkTo type={"Tel"}>
                    {contacts.Fastighetsservice.phone[0].number}
                </LinkTo>
                , välj 1, ({contacts.Fastighetsservice.phone[0].openingHours})
                <br />
                Telefon:{" "}
                <LinkTo type={"Tel"}>
                    {contacts.Fastighetsservice.phone[1].number}
                </LinkTo>{" "}
                ({contacts.Fastighetsservice.phone[1].openingHours})
            </Paragraph>
            <Warn>
                OBS! Är felet du anmäler verkligen akut? Föreningen får extra
                kostnader vid akut felavhjälpning
            </Warn>

            <Hr />

            <SubHeading>Fel i din lägenhet</SubHeading>

            <Paragraph>
                <b>Kontakta</b> <br />
                Fastighetsskötsel.
                <br />
                Webbsida för felamnälan:{" "}
                <Link href={contacts.Fastighetsservice.homePage} underline="hover">
                    {contacts.Fastighetsservice.homePage}
                </Link>
                <br />
                Telefon:{" "}
                <LinkTo type={"Tel"}>
                    {contacts.Fastighetsservice.phone[0].number}
                </LinkTo>{" "}
                ({contacts.Fastighetsservice.phone[0].openingHours})
                <br />
                E-post:{" "}
                <LinkTo type={"Mail"}>
                    {contacts.Fastighetsservice.email}
                </LinkTo>
                <br />
            </Paragraph>

            <Warn>
                Observera att bostadsrättsinnehavaren ansvarar för fel på sin
                enskilda lägenhet. Det går bra att kontakta Fastighetsskötsel,
                men om felet inte täcks av föreningens ansvar debiteras
                bostadsrättsinnehavaren för arbetskostnaden.
            </Warn>

            <Hr />

            <SubHeading>Fel på hiss</SubHeading>

            <Paragraph>
                <b>Kontakta</b> <br /> {contacts.elevator.name}
                <br />
                Telefon:{" "}
                <LinkTo type={"Tel"}>
                    {contacts.elevator.phone[0].number}
                </LinkTo>
            </Paragraph>

            <Hr />

            <SubHeading>Borttappade nycklar</SubHeading>

            <Paragraph>
                Alla ärende gällande nycklar, kontakta{" "}
                {contacts.lockService.name}.
                <br />
                Telefon:{" "}
                <LinkTo type={"Tel"}>
                    {contacts.lockService.phone[0].number}
                </LinkTo>
                <br />
                Email:{" "}
                <LinkTo type={"Mail"}>{contacts.lockService.email}</LinkTo>
            </Paragraph>

            <Hr />

            <SubHeading>Felparkerad bil</SubHeading>

            <Paragraph>
                Kontakta {contacts.parking.name}
                <br />
                Telefon:{" "}
                <LinkTo type={"Tel"}>{contacts.parking.phone[0].number}</LinkTo>
            </Paragraph>
        </PageContainer>
    );
};
