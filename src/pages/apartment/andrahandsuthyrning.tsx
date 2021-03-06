import React from "react";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
} from "../page-container";
import { Link } from "@material-ui/core";
import { LinkTo } from "../contacts/contact-card";
import andrahand from "../../assets/andrahand.pdf";

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
                fylla i <Link href={andrahand}>ansökningsblankett</Link>.
                <br />
                <br />
                Blanketten mailas därefter till{" "}
                <LinkTo type={"Mail"}>
                    andrahand@brf-flygplansfabriken.se
                </LinkTo>
                . Godkänd uthyrningstid är max ett år. Handläggningstiden är ca
                30 dagar.
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
