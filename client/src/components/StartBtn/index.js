import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import LandingAnimation from '../LandingAnimation';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

function StartBtn() {
    const classes = useStyles();
	const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
	const { logout } = useAuth0();
    const opened = LandingAnimation('header');

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
            <Collapse in={opened} { ... (opened ? { timeout: 1000 } : {})}>
            <div>
            <button onClick={() => login()} opened={opened}>
				Let's Get Started
			</button>
			<button onClick={() => logout({ returnTo: window.location.origin })} opened={opened}>
				Log Out
			</button>
            </div>
            </Collapse>
        </div>
    )

}

export default StartBtn;