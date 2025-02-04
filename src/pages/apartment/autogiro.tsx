import React from "react";
import { Heading, PageContainer, Paragraph } from "../page-container";

export const Autogiro = () => {
    return (
        <PageContainer>
            <Heading>Autogiro</Heading>

            <Paragraph>
                Bostadsrättsavgiften kan betalas per autogiro där anmälan görs
                enkelt via din internetbank.
                <ul>
                    <li>
                        I din internetbank: sök efter Brf Flygplansfabriken (Bg:
                        739-5346) i listan över autogiroanslutna företag.
                    </li>
                    <li>
                        Ange ditt kundnummer som betalarnummer; du hittar detta
                        på din avi.
                    </li>
                    <li>
                        Ditt autogiro aktiveras först när du erhåller
                        bekräftelse från banken. Av praktiska skäl gäller inte
                        autogirot för redan aviserade perioder.
                    </li>
                </ul>
                <br />
                Se till att det finns pengar på ditt bankkonto dagen före
                förfallodagen. Redan kl 00:01 på morgonen börjar man köra
                Autogirofunktionen på banken.
            </Paragraph>
        </PageContainer>
    );
};
