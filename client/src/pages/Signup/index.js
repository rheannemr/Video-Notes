import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
	const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
	const { logout } = useAuth0();

	const login = () => {
		loginWithRedirect();
		while (isLoading);
		console.log('test test test');
		if (isAuthenticated) {
			console.log(user.name);
		}
	};

	return (
		<div>
			<button style={{ marginTop: '10vh' }} onClick={() => login()}>
				Log In
			</button>
			<button style={{ marginTop: '10vh' }} onClick={() => logout({ returnTo: window.location.origin })}>
				Log Out
			</button>
		</div>
	);
};

export default LoginButton;
