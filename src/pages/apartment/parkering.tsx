import React from "react";
import { LinkTo } from "../contacts/contact-card";
import contacts from "../contacts/contacts.json";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
} from "../page-container";

export const Parkering = () => {
    return (
        <PageContainer>
            <Heading>Parkering</Heading>
            <Paragraph>
                Brf Flygplansfabriken äger och förfogar över <b>21st</b>{" "}
                parkeringsplatser varav fyra har laddningsstolpe för elbil.
            </Paragraph>

            <Hr />

            <SubHeading>Kostnad och kösystem</SubHeading>

            <Paragraph>
                Parkeringsplatserna utomhus uthyres av föreningen till en
                kostnad av fn. <b>800 kr/mån</b>. Ett tillägg på 400kr för elen
                tillkommer på platserna med laddningstolpar.
                <br />
                <br />
                {/* TODO: Update with info from Nabo.se */}
                För information om eventuellt lediga parkeringsplatser, kontakta
                {contacts.accounting.name} på{" "}
                <LinkTo type={"Mail"}>{contacts.accounting.email}</LinkTo> för
                mer information eller för att anmäla ert intresse.
            </Paragraph>
        </PageContainer>
    );
};
