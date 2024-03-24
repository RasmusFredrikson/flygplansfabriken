import {
    Grid,
    Link,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";
import albinImg from "../../assets/board-members/albin.jpg";
import kandanImg from "../../assets/board-members/kandan.jpg";
import peterImg from "../../assets/board-members/peter.jpg";
import rasmusImg from "../../assets/board-members/rasmus.jpg";
import contacts from "../contacts/contacts.json";
import { Heading, PageContainer, SubHeading } from "../page-container";

export const Medlemmar = () => {
    const members = [
        { img: peterImg, name: "Peter Andersson", position: "Ordförande" },
        { img: albinImg, name: "Albin Ullmark", position: "Styrelseledamot" },
        {
            img: null,
            name: "Kristian Andersson",
            position: "Styrelseledamot",
        },
        {
            img: rasmusImg,
            name: "Rasmus Fredrikson",
            position: "Styrelseledamot",
        },
        {
            img: kandanImg,
            name: "Kandan Bakhtiar Ali",
            position: "Suppleant",
        },
    ];

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
                    {members.map((member) => (
                        <TableRow key={member.name}>
                            <TableCell>
                                <Typography>
                                    <b>{member.name}</b>
                                </Typography>
                            </TableCell>

                            <TableCell>
                                <Typography>{member.position}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Grid
                container
                style={{
                    marginTop: "20px",
                    textAlign: "center",
                }}
            >
                {members
                    .filter((m) => !!m.img)
                    .map((member) => (
                        <Grid
                            key={member.name}
                            md={3}
                            sm={6}
                            xs={12}
                            style={{ marginTop: "10px" }}
                        >
                            <img
                                style={{ filter: "grayscale(100%)" }}
                                src={member.img}
                                width={"200px"}
                            />
                            <div>{member.name}</div>
                        </Grid>
                    ))}
            </Grid>
        </PageContainer>
    );
};
