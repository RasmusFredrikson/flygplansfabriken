import React, { forwardRef, Fragment, useMemo, useState } from "react";
import {
    Box,
    ButtonBase,
    ButtonProps,
    ClickAwayListener,
    Collapse,
    Drawer,
    List,
    ListItem,
    ListItemProps,
    ListItemText,
    Paper,
    Popper,
    styled,
} from "@material-ui/core";
import { useNavigate, useMatch } from "react-router";
import { AnimatePresence } from "framer-motion";
import { SlideDown } from "../animation/slide-down";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

interface IMenu {
    name: string;
    path: string;
    subMenu?: IMenu[];
}

export const NavMenu = ({ name, path, subMenu = [] }: IMenu) => {
    const match = useMatch(`${path}/*`);
    const [triggerElem, setTriggerElem] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState(false);

    const isActive = useMemo(() => {
        return match;
    }, [match, path]);

    const closeMenu = () => {
        setOpenSubmenu(false);
    };

    return (
        <ClickAwayListener onClickAway={() => setOpenSubmenu(false)}>
            <div>
                <MenuLink
                    isActive={isActive}
                    onClick={() => setOpenSubmenu(!openSubmenu)}
                    ref={setTriggerElem}
                >
                    {name}
                </MenuLink>

                <Popper
                    open={openSubmenu}
                    anchorEl={triggerElem}
                    placement={"bottom-start"}
                    modifiers={{
                        offset: {
                            enabled: true,
                            padding: 0,
                        },
                    }}
                    keepMounted
                >
                    <AnimatePresence>
                        {openSubmenu && (
                            <SlideDown>
                                <Paper>
                                    <List>
                                        {subMenu?.map((sm) => (
                                            <ListLink
                                                key={sm.path}
                                                {...sm}
                                                onClick={closeMenu}
                                            />
                                        ))}
                                    </List>
                                </Paper>
                            </SlideDown>
                        )}
                    </AnimatePresence>
                </Popper>
            </div>
        </ClickAwayListener>
    );
};

interface IMobileMenu {
    isOpen?: boolean;
    onClose?: () => void;
    menus: IMenu[];
}

export const MobileMenu = ({ isOpen, onClose, menus }: IMobileMenu) => {
    return (
        <Drawer anchor={"right"} open={isOpen} onClose={onClose}>
            <List>
                {menus.map((m) => (
                    <Fragment key={m.name}>
                        {!m.subMenu?.length && (
                            <ListLink {...m} onClick={onClose} />
                        )}

                        <NestedMobileMenus
                            name={m.name}
                            subMenu={m.subMenu}
                            onSelected={onClose}
                            path={m.path}
                        />
                    </Fragment>
                ))}
            </List>
        </Drawer>
    );
};

interface INestedMobileMenus {
    name: string;
    path: string;
    subMenu?: IMenu[];
    onSelected?: () => void;
}

const NestedMobileMenus = ({
    name,
    path,
    subMenu = [],
    onSelected,
}: INestedMobileMenus) => {
    const match = useMatch(`${path}/*`);
    const [expanded, setExpanded] = useState(!!match);
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return subMenu?.length ? (
        <>
            <ListItem button onClick={toggleExpand}>
                <ListItemText>{name}</ListItemText>
                <Box paddingLeft={4}>
                    {expanded ? <ExpandLess /> : <ExpandMore />}
                </Box>
            </ListItem>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {subMenu.map((sm) => (
                        <ListLink
                            key={sm.path}
                            style={{ paddingLeft: "2rem" }}
                            {...sm}
                            onClick={onSelected}
                        />
                    ))}
                </List>
            </Collapse>
        </>
    ) : null;
};

interface IMenuProps extends ButtonProps {
    isActive?: boolean;
}

export const MenuLink = styled(
    forwardRef(({ isActive, ...rest }: IMenuProps, ref: any) => (
        <ButtonBase ref={ref} {...rest} />
    )),
)((props: any) => ({
    minHeight: props.theme.mixins.toolbar.minHeight,
    color: "white",
    padding: "0 1rem",
    textTransform: "uppercase",
    borderBottom: "solid 3px",
    borderBottomColor: props.isActive
        ? props.theme.palette.secondary.main
        : "transparent",
}));

export const SingleLink = ({ name, path = "NOT MATCH" }: IMenu) => {
    const isActive = useMatch(path);
    const navigate = useNavigate();

    const go = () => {
        if (path && !isActive) {
            navigate(path);
        }
    };

    return (
        <MenuLink isActive={isActive} onClick={go}>
            {name}
        </MenuLink>
    );
};

interface IListLinkProps extends IMenu, ListItemProps {
    onClick?: () => void;
}

const ListLink = ({
    name,
    path = "NOT MATCH",
    onClick,
    ...rest
}: IListLinkProps) => {
    const isActive = useMatch(path);
    const navigate = useNavigate();

    const go = () => {
        if (path && !isActive) {
            navigate(path);
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <ListItem button selected={!!isActive} onClick={go} {...(rest as any)}>
            <ListItemText>{name}</ListItemText>
        </ListItem>
    );
};
