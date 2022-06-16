import React, { PropsWithChildren } from "react";
import { Box, Divider, Paper, Typography } from "@material-ui/core";
import { Appear } from "../animation/appear";

export const PageContainer = ({ children }: PropsWithChildren<any>) => {
    return (
        <Appear>
            <Paper>
                <Box padding={6}>{children}</Box>
            </Paper>
        </Appear>
    );
};

export const Heading = ({ children }: PropsWithChildren<any>) => {
    return (
        <Typography variant={"h4"} paragraph>
            {children}
        </Typography>
    );
};

export const SubHeading = ({ children }: PropsWithChildren<any>) => {
    return (
        <Typography variant={"h6"} paragraph>
            {children}
        </Typography>
    );
};

export const Paragraph = ({ children }: PropsWithChildren<any>) => {
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

export const Warn = ({ children }: PropsWithChildren<any>) => {
    return (
        <Typography variant={"body1"} color={"error"} paragraph>
            {children}
        </Typography>
    );
};
