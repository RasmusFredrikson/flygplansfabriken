import { Link } from "@material-ui/core";
import React from "react";
import autogiro from "../../assets/autogiro.pdf";
import { LinkTo } from "../contacts/contact-card";
import { Heading, PageContainer, Paragraph } from "../page-container";

export const Autogiro = () => {
    return (
        <PageContainer>
            <Heading>Autogiro</Heading>

            <Paragraph>
                Bostadsrättsavgiften kan betalas per autogiro och kan ansökas om
                genom att fylla i en{" "}
                <Link href={autogiro} target="_blank">
                    ansökningsblankett
                </Link>
                .
                <br />
                Blanketten mailas till{" "}
                <LinkTo type={"Mail"}>
                    styrelsen@brf-flygplansfabriken.se
                </LinkTo>
                . Den kan även lämnas i styrelsens brevlåda längst upp till
                höger vid postfacken.
                <br />
                <br />
                <b>
                    Ditt autogiro fungerar först när du erhåller bekräftelse
                    från banken. Av praktiska skäl gäller inte autogirot för
                    redan aviserade perioder.
                </b>
                <br />
                <br />
                Se till att det finns pengar på ditt bankkonto dagen före
                förfallodagen. Redan kl 00:01 på morgonen börjar man köra
                Autogirofunktionen på banken.
                <br />
                Mer information finns i{" "}
                <Link href={autogiro} target="_blank">
                    ansökningsblanketten
                </Link>
                .
            </Paragraph>
        </PageContainer>
    );
};
