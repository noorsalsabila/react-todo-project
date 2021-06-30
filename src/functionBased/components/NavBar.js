import React, {useState, createRef, useRef} from "react"
import { Link } from "react-router-dom"
import {makeStyles, ListSubheader, List, ListItem, ListItemIcon, ListItemText, Collapse } from "@material-ui/core";
import { Info, Home, ExpandLess, ExpandMore, Dns, Person  } from "@material-ui/icons";

const links = [
    {
        id:1,
        path:"/",
        text:"Home",
        itemIcon: <Home/>,
        isLink: true
    },
    {
        id:2,
        text:"ABOUT",
        isLink: false,
        itemIcon: <Info/>,
        subMenu:[
            {
                id: 1.1,
                path:"/about/about-app",
                text:"About App",
                itemIcon: <Dns/>
            },
            {
                id: 1.2,
                path:"/about/about-author",
                text:"About Author",
                itemIcon: <Person/>
            },
        ]
    }
]

const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        display:'-webkit-inline-box'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}))

const NavBar = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(links[0].id);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleSelectedMenuClicked = (event, index, isSubMenu) => {
        setSelectedIndex(index);
        if(!isSubMenu || (isSubMenu && open)){
            setOpen(!open);
        }
    }

    const wrapper = useRef(null);
    return(
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                    component="div"
                    id="nested-list-subheader">
                        Menu
                </ListSubheader>
            }
            className={classes.root}>
                {links.map(link => {
                    return <li key={link.id}>
                        <ListItem 
                            button 
                            component={link.isLink ? Link : ""}
                            to={link.isLink ? link.path : ""}
                            selected = {selectedIndex === link.id}
                            onClick = {(event) => handleSelectedMenuClicked(event, link.id, link.isLink)}>
                        <ListItemIcon>
                            {link.itemIcon}
                        </ListItemIcon>
                        <ListItemText primary={link.text}/>
                        {!link.isLink
                            ? open 
                                ? <ExpandLess /> : <ExpandMore/>
                            :""}
                        </ListItem>
                        {Array.isArray(link.subMenu)
                            ?(<Collapse in={open} timeout="auto" unmountOnExit ref={wrapper}>
                                <List component="div" disablePadding dense ref={wrapper}>
                                {link.subMenu.map(submenu => {
                                        return(<ListItem
                                            id={submenu.id}
                                            ref={wrapper}
                                            key={submenu.id}
                                            button
                                            component={Link}
                                            to={submenu.path}
                                            className={classes.nested}
                                            selected={selectedIndex === submenu.id}
                                            onClick={(e) => handleSelectedMenuClicked(e, submenu.id, false)}>
                                                <ListItemIcon ref={wrapper}>
                                                    {submenu.itemIcon}
                                                </ListItemIcon>
                                                <ListItemText primary={submenu.text}/>
                                        </ListItem>)
                                })}   
                                </List>
                            </Collapse>)
                            :null}
                    </li>
                })}
            
        </List>
    )
}

export default NavBar;