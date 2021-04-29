import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton, Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    textcolor: {
        color: '#d45548'
    },
    container: {
        textAlign: 'center'
    },
    title: {
        color: 'black',
        fontSize: '5rem',
        fontFamily: 'Comfortaa'
    },
    expandMore: {
        color: 'black',
        fontSize: '4rem'
    }
}));

function Header() {
    const classes = useStyles();
    const [checked, setchecked] = useState(false);

    useEffect(() => {
        setchecked(true);
    })

    return (
        <div className={classes.root} id="header">
            <Collapse in={checked} {... (checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to<br /><span className={classes.textcolor}>U Notes</span>
                    </h1>
                    <Scroll to="start-btn" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.expandMore} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}

export default Header;