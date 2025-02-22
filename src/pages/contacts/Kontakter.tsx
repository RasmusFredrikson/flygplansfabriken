import { Link } from "@mui/material";
import React from "react";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
} from "../page-container";
import { LinkTo } from "./contact-card";
import contacts from "./contacts.json";

const { styrelsen, accounting } = contacts;
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
                <Link target="_blank" href={accounting.hrefs.homepage}>
                    mina sidor
                </Link>{" "}
                hos {accounting.name} med BankID.
                <br />
                På sidan hittar du även anmälan för <b>Autogiro</b>.
            </Paragraph>

            <Hr />

            <SubHeading>Utdrag ur lägenhetsförteckningen</SubHeading>

            <Paragraph>
                Medlemmar kan begära ut detta genom att fylla i
                kontaktformuläret{" "}
                <Link href={accounting.hrefs.contactUs} target="_blank">
                    här
                </Link>
                .
            </Paragraph>

            <Hr />

            <SubHeading>Parkeringsplatser och tillstånd utomhus</SubHeading>

            <Paragraph>
                <b>Kontakt</b>
                <br />
                Ställ dig i kö hos{" "}
                <Link
                    target="_blank"
                    href={contacts.accounting.hrefs.parkering}
                >
                    Nabo
                </Link>
                .
                <br />
                För tillstånd utomhus, kontakta{" "}
                <LinkTo type={"Mail"}>{accounting.email}</LinkTo>
            </Paragraph>
        </PageContainer>
    );
};
