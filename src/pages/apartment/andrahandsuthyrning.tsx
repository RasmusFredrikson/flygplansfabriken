import { Link } from "@material-ui/core";
import React from "react";
import andrahand from "../../assets/andrahand.pdf";
import { LinkTo } from "../contacts/contact-card";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
} from "../page-container";

export const Andrahandsuthyrning = () => {
    return (
        <PageContainer>
            <Heading>Regler</Heading>

            <Paragraph>
                Regler gällande andrahandsuthyrning finns i föreningens{" "}
                <Link href="/#/styrelsen/document">Stadgar</Link>
            </Paragraph>

            <Hr />

            <SubHeading>Så här ansöker du</SubHeading>

            <Paragraph>
                För att ansöka om att hyra ut din bostad i andra hand behöver du
                fylla i{" "}
                <Link href={andrahand} target="_blank">
                    ansökningsblankett
                </Link>
                .
                <br />
                <br />
                Blanketten mailas därefter till{" "}
                <LinkTo type={"Mail"}>
                    andrahand@brf-flygplansfabriken.se
                </LinkTo>
                .
                <ul>
                    <li>Godkänd uthyrningstid är max ett år.</li>
                    <li>
                        Uthyrningen ska ske mellan den första och sista dagen i
                        respektive månad.
                    </li>
                    <li>Handläggningstiden är ca 30 dagar.</li>
                </ul>
            </Paragraph>

            <SubHeading>Avgift i samband med andrahandsuthyrning</SubHeading>

            <Paragraph>
                Brf Flygplansfabriken tar ut en månadsavgift för varje påbörjad
                månad som andrahandsuthyrning pågår. Avgiften för dig som hyr ut
                i andra hand är 10 % av gällande prisbasbelopp per helår.
                Avgiften utgår för varje påbörjad månad av
                andrahandsuthyrningen. Månadsavgiften för andrahandsuthyrning
                kommer att läggas till på månadsavin för föreningsavgiften under
                den period du ansökt om att hyra ut i andra hand.
                <br />
                <br />
                Observera att du fortfarande måste ansöka hos styrelsen om att
                hyra ut din lägenhet i enlighet med föreningens stadgar.
                Andrahandsuthyrning utan tillstånd är ett brott mot föreningens
                stadgar och kan leda till att nyttjanderätten för lägenheten
                förverkas.
            </Paragraph>
        </PageContainer>
    );
};
