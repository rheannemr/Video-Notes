import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../../components/Header';
import StartBtn from '../../components/StartBtn';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/pastel.jpeg'})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	}
}));

const Landing = () => {
	const classes = useStyles();
	const { user, isAuthenticated } = useAuth0();

	useEffect(() => {
		if (isAuthenticated && !localStorage.getItem('auth0.user')) {
			localStorage.setItem('auth0.user', user.name);
		}
	});

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header />
			<StartBtn />
		</div>
	);
};

export default Landing;
