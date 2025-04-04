import { Box, Link } from "@mui/material";
import React from "react";
import ar2017 from "../../assets/2016-2017.pdf";
import ar2018 from "../../assets/2017-2018.pdf";
import ar2019 from "../../assets/2019.pdf";
import ar2020 from "../../assets/2020.pdf";
import ar2021 from "../../assets/2021.pdf";
import ar2022 from "../../assets/2022.pdf";
import ar2023 from "../../assets/2023.pdf";
import ar2024 from "../../assets/2024.pdf";
import bostadsandring from "../../assets/bostadsandring.pdf";
import stadgar2019 from "../../assets/stadgar2019.pdf";
import { accounting } from "../contacts/contacts.json";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
} from "../page-container";

export const Dokument = () => {
    return (
        <PageContainer>
            <Heading>Dokument</Heading>

            <Box marginY={5} />

            <SubHeading>Stadgar</SubHeading>

            <Paragraph>
                <Link target="_blank" href={stadgar2019}>
                    Stadgar.pdf
                </Link>
            </Paragraph>

            <Hr />

            <SubHeading>Årsredovisningar</SubHeading>

            <Paragraph>
                <Link target="_blank" href={ar2024}>
                    Årsredovisning 2024.pdf
                </Link>
            </Paragraph>

            <Paragraph>
                <Link target="_blank" href={ar2023}>
                    Årsredovisning 2023.pdf
                </Link>
            </Paragraph>

            <Paragraph>
                <Link target="_blank" href={ar2022}>
                    Årsredovisning 2022.pdf
                </Link>
            </Paragraph>

            <Paragraph>
                <Link target="_blank" href={ar2021}>
                    Årsredovisning 2021.pdf
                </Link>
            </Paragraph>

            <Paragraph>
                <Link target="_blank" href={ar2020}>
                    Årsredovisning 2020.pdf
                </Link>
            </Paragraph>

            <Paragraph>
                <Link target="_blank" href={ar2019}>
                    Årsredovisning 2019.pdf
                </Link>
            </Paragraph>

            <Paragraph>
                <Link target="_blank" href={ar2018}>
                    Årsredovisning 2018.pdf
                </Link>
            </Paragraph>

            <Paragraph>
                <Link target="_blank" href={ar2017}>
                    Årsredovisning 2017.pdf
                </Link>
            </Paragraph>

            <Hr />

            <SubHeading>Ansökan andrahandsuthyrning</SubHeading>

            <Paragraph>
                <Link
                    target="_blank"
                    href={accounting.hrefs.andrahandsuthyrning}
                >
                    Andrahandsuthyrning
                </Link>
            </Paragraph>

            <Hr />

            <SubHeading>Anmälam autogiro</SubHeading>

            <Paragraph>
                <Link href={"/#/boendeinformation/autogiro"}>Autogiro</Link>
            </Paragraph>

            <Hr />

            <SubHeading>
                Ansökan om tillstånd för ändring i bostadsrättslägenhet.
            </SubHeading>

            <Paragraph>
                <Link target="_blank" href={bostadsandring}>
                    Bostadsändring.pdf
                </Link>
            </Paragraph>
        </PageContainer>
    );
};
