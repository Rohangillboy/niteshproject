import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { saveState } from './utils';

function Login() {
	//dispatching; pulling info from data layer
	const [state, dispatch] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				});
				console.log(result)
				saveState(result).then((res) => { console.log('saved', res) }).catch(() => { })
				// console.log(result)
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
				<img
					className="logo1"
					src="https://www.linkpicture.com/q/Social-Buzz-logo.png"
					alt=""
				/>
				{/* https://www.linkpicture.com/q/Social-Buzz-logo.png */}
				<Button className='btn' type="submit" onClick={signIn}>
					Sign In with Google
				</Button>
				
			
		</div>
	);
}

export default Login;
