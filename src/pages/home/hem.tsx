import { Box } from "@mui/material";
import React from "react";
import homeBg from "../../assets/framsidan2.png";
import { Heading, PageContainer, Paragraph } from "../page-container";

export const Hem = () => (
    <PageContainer>
        <Heading>Välkommen</Heading>

        <Paragraph>
            2015 färdigställde byggföretaget SSM Brf Flygplansfabriken i
            Midsommarkransen. Brf Flygplansfabriken består av 73 kvadratsmarta
            lägenheter om 1-2 rum. Bostäderna präglas av tidlös design och
            kvadrateffektiva ytor.
        </Paragraph>

        <Paragraph>
            På denna sida finns information om föreningen, både för dig som
            önskar att köpa en bostadsrätt och för dig som redan bor här.
        </Paragraph>

        <Box>
            <img src={homeBg} width={"100%"} />
        </Box>
    </PageContainer>
);
