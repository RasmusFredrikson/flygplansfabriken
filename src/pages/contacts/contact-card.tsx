import { Link } from "@mui/material";
import React, { PropsWithChildren, useMemo } from "react";

interface ILinkProps {
    type: "Tel" | "Mail";
}

export const LinkTo = ({ type, children }: PropsWithChildren<ILinkProps>) => {
    const meta = useMemo(() => {
        switch (type) {
            case "Mail":
                return "mailto";
            case "Tel":
                return "tel";
            default:
                return "";
        }
    }, []);

    return (
        <Link color={"secondary"} href={`${meta}:${children}`}>
            {children}
        </Link>
    );
};
