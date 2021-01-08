import React, {forwardRef, useMemo, useState} from 'react';
import {ButtonBase, ButtonProps, ClickAwayListener, List, ListItem, ListItemText, Paper, Popper, styled} from '@material-ui/core';
import {useHistory, useRouteMatch} from 'react-router';
import {AnimatePresence} from 'framer-motion';
import {SlideDown} from '../animation/slide-down';


interface IMenu {
  name: string;
  path?: string;
  subMenu?: IMenu[];
}

export const NavMenu = ({name, path, subMenu = []}: IMenu) => {
  const match = useRouteMatch([path, ...subMenu.map(sm => sm.path)].filter(Boolean) as string[]);
  const [triggerElem, setTriggerElem] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const isActive = useMemo(() => {
    return match;
  }, [match, path]);

  return (
    <ClickAwayListener onClickAway={() => setOpenSubmenu(false)}>
      <div>
        <MenuLink isActive={isActive} onClick={() => setOpenSubmenu(!openSubmenu)} ref={setTriggerElem}>
          {name}
        </MenuLink>

        <Popper open={openSubmenu} anchorEl={triggerElem} placement={'bottom-start'} modifiers={{
          offset: {
            enabled: true,
            padding: 0
          }
        }} keepMounted>
          <AnimatePresence>
            {openSubmenu && (
              <SlideDown>
                <Paper>
                  <List>
                    {subMenu?.map(sm => (
                      <ListLink key={sm.path} {...sm}/>
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

interface IMenuProps extends ButtonProps {
  isActive?: boolean;
}

export const MenuLink = styled(forwardRef(({isActive, ...rest}: IMenuProps, ref: any) => <ButtonBase
  ref={ref} {...rest}/>))((props: any) => ({
  minHeight: props.theme.mixins.toolbar.minHeight,
  color: "white",
  padding: "0 1rem",
  textTransform: "uppercase",
  borderBottom: "solid 3px",
  borderBottomColor: props.isActive ? props.theme.palette.secondary.main : "transparent"
}));

export const SingleLink = ({name, path = "NOT MATCH"}: IMenu) => {
  const isActive = useRouteMatch(path);
  const history = useHistory();

  const go = () => {
    if (path && !isActive) {
      history.push(path);
    }
  };

  return <MenuLink isActive={isActive} onClick={go}>
    {name}
  </MenuLink>;
};

const ListLink = ({name, path = "NOT MATCH"}: IMenu) => {
  const isActive = useRouteMatch(path);
  const history = useHistory();

  const go = () => {
    if (path && !isActive) {
      history.push(path);
    }
  };

  return (
    <ListItem button selected={!!isActive} onClick={go}>
      <ListItemText>
        {name}
      </ListItemText>
    </ListItem>
  );
};
