import React from "react";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
} from "../page-container";
import { LinkTo } from "../contacts/contact-card";
import contacts from "../contacts/contacts.json";

export const Parkering = () => {
    return (
        <PageContainer>
            <Heading>Parkering</Heading>
            <Paragraph>
                Brf Flygplansfabriken äger och förfogar över <b>21st</b>{" "}
                parkeringsplatser.
            </Paragraph>

            <Hr />

            <SubHeading>Kostnad och kösystem</SubHeading>

            <Paragraph>
                Parkeringsplatserna utomhus uthyres av föreningen till en
                kostnad av fn. <b>800 kr/mån</b>
                <br />
                <br />
                För information om eventuellt lediga parkeringsplatser, kontakta
                Brf Ekonomen på{" "}
                <LinkTo type={"Mail"}>{contacts.accounting.email}</LinkTo> för
                mer information eller för att anmäla ert intresse.
            </Paragraph>
        </PageContainer>
    );
};
