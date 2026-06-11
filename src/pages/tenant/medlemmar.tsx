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
import viktorImg from "../../assets/board-members/viktor.jpg";
import charalamposImg from "../../assets/board-members/charalampos.webp";
import kandanImg from "../../assets/board-members/kandan.webp";
import kristianImg from "../../assets/board-members/kristian.png";
import admassImg from "../../assets/board-members/admass.png";
import contacts from "../contacts/contacts.json";
import { Heading, PageContainer, SubHeading } from "../page-container";

export const Medlemmar = () => {
    const members = [
        { img: kandanImg, name: "Kandan Bakhtiar Ali", position: "Ordförande" },
        {
            img: charalamposImg,
            name: "Charalampos Antonopoulos",
            position: "Styrelseledamot",
        },
        {
            img: viktorImg,
            name: "Viktor Elofsson",
            position: "Styrelseledamot",
        },
        {
            img: kristianImg,
            name: "Kristian Andersson",
            position: "Styrelseledamot",
        },
        {
            img: admassImg,
            name: "Admass Beyeen",
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
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(${member.img})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        width: "200px",
                                        height: "200px",
                                        aspectRatio: "1",
                                        filter: "grayscale(100%)",
                                    }}
                                ></div>
                                <div>{member.name}</div>
                            </div>
                        </Grid>
                    ))}
            </Grid>
        </PageContainer>
    );
};
