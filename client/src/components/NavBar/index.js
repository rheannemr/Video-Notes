import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Tabs, Tab, AppBar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	navbar: {
		background: '#e7966e'
	},
	toolbarButtons: {
		marginLeft: 'auto',
		marginTop: '4.5px',
		marginRight: '43px'
	}
}));

function NavBar() {
	const classes = useStyles();
	const { logout } = useAuth0();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleLogout = async () => {
		await logout({
			returnTo: window.location.origin
		});

		localStorage.removeItem('auth0.user');
	};

	return (
		<div>
			<AppBar className={classes.navbar} elevation={0}>
				<Tabs value={value} onChange={handleChange}>
					<Tab label="Sign In" component={Link} to={'/landing'} />
					<Tab label="Search Video" component={Link} to={'/search'} />
					<Tab label="My Video Notes" component={Link} to={'/savednotes'} />
					<span className={classes.toolbarButtons}>
						<Button color="inherit" onClick={() => handleLogout()}>
							Log Out
						</Button>
					</span>
				</Tabs>
			</AppBar>
		</div>
	);
}

export default NavBar;
