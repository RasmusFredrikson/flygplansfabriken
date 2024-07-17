import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Appear } from "../animation/appear";

export const PageContainer = ({ children }: PropsWithChildren) => {
    return (
        <Appear>
            <Paper>
                <Box padding={6}>{children}</Box>
            </Paper>
        </Appear>
    );
};

export const Heading = ({ children }: PropsWithChildren) => {
    return (
        <Typography variant={"h4"} paragraph>
            {children}
        </Typography>
    );
};

export const SubHeading = ({ children }: PropsWithChildren) => {
    return (
        <Typography variant={"h6"} paragraph>
            {children}
        </Typography>
    );
};

export const Paragraph = ({ children }: PropsWithChildren) => {
    return (
        <Typography variant={"body1"} paragraph>
            {children}
        </Typography>
    );
};

export const Hr = () => {
    return (
        <>
            <br />
            <Divider />
            <br />
        </>
    );
};

export const Warn = ({ children }: PropsWithChildren) => {
    return (
        <Typography variant={"body1"} color={"error"} paragraph>
            {children}
        </Typography>
    );
};
