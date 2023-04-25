import Typography from "@material-ui/core/Typography";
import React from "react";
import {
    Heading,
    Hr,
    PageContainer,
    Paragraph,
    SubHeading,
} from "../page-container";

export const Brandskyddsinformation = () => {
    return (
        <PageContainer>
            <Heading>Brandskyddsinformation</Heading>

            <SubHeading>Brandskyddet i din fastighet</SubHeading>
            <Paragraph>
                Barnvagnar och cyklar i ett trapphus är bland de största hindren
                för Räddningstjänsten när akut hjälp behövs. Ett trapphus blir
                snabbt rökfyllt vid brand och då kan en barnvagn innebära
                livsfara för dig och dina grannar.
            </Paragraph>

            <Hr />

            <SubHeading>Stäng in branden</SubHeading>
            <Paragraph>
                Om det brinner i din lägenhet, ta dig ut och stäng dörren efter
                dig. Då sprider sig inte branden och den giftiga röken ut i
                trapphuset lika fort. Brinner det hos någon annan och trapphuset
                är rökfyllt, stanna i din lägenhet och ha dörrar och fönster
                stängda. Ring 112 i händelse av brand.
            </Paragraph>

            <Hr />

            <SubHeading>Din väg ut är Räddningstjänstens väg in</SubHeading>
            <Paragraph>
                I en akut situation är det ibland avgörande för dig att snabbt
                kunna komma ut ur fastigheten, oavsett var du befinner dig.
                Detta innebär även att källaren och trapphuset blir en
                utrymningsväg för dig eller dina grannar. I dessa akuta
                situationer är det viktigt att brandkåren eller
                räddningspersonalen snabbt kan ta sig in. Det är därför viktigt
                att du aldrig blockerar dessa utrymmen ens för en kortare tid.
                Om vi anser att en utrymningsväg blockeras eller om det
                påträffas brännbart material kommer detta omgående att tas bort
                utan vidare förvarning.
            </Paragraph>

            <Hr />

            <SubHeading>Dörrmattan på insidan</SubHeading>
            <Paragraph>
                Med dörrmattan på insidan av lägenhetsdörren kan vi enklare
                hålla trapphuset rent och snyggt. Samtidigt minskar du risken
                för brand i trapphuset! En dörrmatta tar lätt eld och branden
                sprider sig via ytterdörren till din lägenhet på mycket kort
                tid.
            </Paragraph>

            <Hr />

            <SubHeading>Brandvarnare och släckutrustning</SubHeading>
            <Paragraph>
                Det ska finnas minst en brandvarnare i varje hem, tänk på att
                byta batteri en gång per år, den första december är bra att ha
                som regel (1-12). En brandsläckare är bra att ha hemma, att
                använda en kan förhindra att branden sprider sig vidare. För
                bostäder rekommenderar MSB (Myndigheten för Samhällsskydd och
                beredskap) att ha pulversläckare med minst sex kilo pulver och
                effektivitetsklass 43A 233BC.
            </Paragraph>

            <Typography
                style={{
                    fontWeight: "bold",
                    marginTop: "72px",
                    fontSize: "28px",
                }}
                align="center"
                paragraph
            >
                Kom ihåg: Rädda – Varna – Larma
            </Typography>
        </PageContainer>
    );
};
