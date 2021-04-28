import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Button } from '@material-ui/core';
import LandingAnimation from '../LandingAnimation';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    startBtn: {
        fontSize: '40px',
        fontFamily:'Comfortaa'
    }
    
}));

function StartBtn() {
    const classes = useStyles();
	const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
    const checked = LandingAnimation('header');

	const login = () => {
		loginWithRedirect();
		while (isLoading);
		console.log('test test test');
		if (isAuthenticated) {
			console.log(user.name);
		}
	};

    return (
        <div className={classes.root} id="start-btn">
            <Collapse in={checked} { ... (checked ? { timeout: 1000 } : {})}>
            <div>
            <Button className={classes.startBtn} onClick={() => login()} checked={checked}>
				Let's Get Started
			</Button>
            </div>
            </Collapse>
        </div>
    )

}

export default StartBtn;