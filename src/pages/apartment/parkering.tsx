import { Link } from "@mui/material";
import React from "react";
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
                Hos Nabo under{" "}
                <Link href={contacts.accounting.hrefs.parkering}>Köer</Link> kan
                du ställa dig i kö och hitta information om kötid.
            </Paragraph>
        </PageContainer>
    );
};
