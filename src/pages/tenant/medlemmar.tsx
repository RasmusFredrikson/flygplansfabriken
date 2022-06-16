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
                    <TableRow>
                        <TableCell>
                            <Typography>
                                <b>Peter Andersson</b>
                            </Typography>
                        </TableCell>

                        <TableCell>
                            <Typography>Ordförande</Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Typography>
                                <b>Quang Vu</b>
                            </Typography>
                        </TableCell>

                        <TableCell>
                            <Typography>Styrelseledamot</Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Typography>
                                <b>Albin Ullmark</b>
                            </Typography>
                        </TableCell>

                        <TableCell>
                            <Typography>Styrelseledamot</Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Typography>
                                <b>Fredrik Andersson</b>
                            </Typography>
                        </TableCell>

                        <TableCell>
                            <Typography>Styrelseledamot</Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Typography>
                                <b>Linnea Werre </b>
                            </Typography>
                        </TableCell>

                        <TableCell>
                            <Typography>Suppleant</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </PageContainer>
    );
};
