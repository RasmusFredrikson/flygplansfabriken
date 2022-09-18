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
import peterImg from "../../assets/board-members/peter.jpg";
import albinImg from "../../assets/board-members/albin.jpg";
import kandanImg from "../../assets/board-members/kandan.jpg";
import rasmusImg from "../../assets/board-members/rasmus.jpg";

export const Medlemmar = () => {
    const members = [
        { img: peterImg, name: "Peter Andersson", position: "Ordförande" },
        { img: albinImg, name: "Albin Ullmark", position: "Styrelseledamot" },
        {
            img: kandanImg,
            name: "Kandan Bakhtiar Ali",
            position: "Suppleant",
        },
        { img: rasmusImg, name: "Rasmus Fredrikson", position: "Suppleant" },
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
                        <TableRow>
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
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                {members.map((member) => (
                    <div style={{ paddingRight: "10px", textAlign: "center" }}>
                        <img
                            style={{ filter: "grayscale(100%)" }}
                            src={member.img}
                            width={"200px"}
                        />
                        <div>{member.name}</div>
                    </div>
                ))}
            </div>
        </PageContainer>
    );
};
