import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../../components/Header';
import StartBtn from '../../components/StartBtn';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/abstract.jpeg'})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	}
}));

const Landing = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header />
			<StartBtn />
		</div>
	);
};

export default Landing;
