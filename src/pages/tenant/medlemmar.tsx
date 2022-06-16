import React from "react";
import { Heading, PageContainer, SubHeading } from "../page-container";
import {
    Link,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from "@material-ui/core";
import contacts from "../contacts/contacts.json";

export const Medlemmar = () => {
    const row = (name: string, post: string) => (
        <TableRow>
            <TableCell>
                <Typography>
                    <b>{name}</b>
                </Typography>
            </TableCell>

            <TableCell>
                <Typography>{post}</Typography>
            </TableCell>
        </TableRow>
    );

    return (
        <PageContainer>
            <Heading>Styrelsemedlemmar</Heading>

            <SubHeading>Vi sitter med i styrelsen</SubHeading>

            <Table>
                <caption>
                    <Typography variant="body1">
                        Vill du vara med i styrelsen för att bidra och driva
                        olika gemensamma projekt, tveka inte att{" "}
                        <Link href={`mailto:${contacts.styrelsen.email}`}>
                            kontakta oss
                        </Link>
                        .
                    </Typography>
                </caption>

                <TableBody>
                    {row("Peter Andersson", "Ordförande")}
                    {row("Albin Ullmark", "Styrelseledamot")}
                    {row("Linnea Werre", "Styrelseledamot")}
                    {row("Kandan Bakhtiar Ali", "Suppleant")}
                    {row("Rasmus Fredrikson", "Suppleant")}
                </TableBody>
            </Table>
        </PageContainer>
    );
};
