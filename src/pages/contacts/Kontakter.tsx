import React from "react";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
    Warn,
} from "../page-container";
import contacts from "./contacts.json";
import { LinkTo } from "./contact-card";
import { Link } from "@material-ui/core";

const {
    Fastighetsservice,
    styrelsen,
    accounting,
    parking,
    elevator,
    lockService,
} = contacts;
export const Kontakter = () => {
    return (
        <PageContainer>
            <Heading>Kontaktuppgifter</Heading>

            <SubHeading>Styrelsen</SubHeading>

            <Paragraph>
                E-post: <LinkTo type={"Mail"}>{styrelsen.email}</LinkTo>
                <br />
                Du kan även lägga meddelanden i styrelsens postfack i entrén.
            </Paragraph>

            <Hr />

            <SubHeading>Avgifter och avier</SubHeading>

            <Paragraph>
                <b>Logga in</b> på{" "}
                <Link href={accounting.homepage}>mina sidor</Link> hos{" "}
                {accounting.name}
            </Paragraph>

            <Hr />

            <SubHeading>Parkeringsplatser och tillstånd utomhus</SubHeading>

            <Paragraph>
                <b>Kontakta</b>
                <br />
                {accounting.name}
                <br />
                E-post: <LinkTo type={"Mail"}>{accounting.email}</LinkTo>
            </Paragraph>
        </PageContainer>
    );
};
