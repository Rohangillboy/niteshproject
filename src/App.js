import React from 'react';
import './App.css';
import Login from './Login'
import { useStateValue } from './StateProvider';
import Home from './Home';
import { loadState } from './utils';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {
	const[{ user }] =useStateValue();
	const [status, SetStatus] = useState(null)
	useEffect(() => {
		loadState().then((res) => {
			SetStatus(res)
			console.log(res,'dekhomujhe')
		});
	}, [user]);
	return (

		



		//BEM naming convention
		<div className="app">

			{!status ? (
			 <Login />
			):(
				<Home/>
			)}
			
			

    
		</div>
	);
}

export default App;
