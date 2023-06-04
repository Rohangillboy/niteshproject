import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import './App.css'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
function Home() {
	const [{ user,dispatch }] = useStateValue();
	return (
				<>
				<Header />
			
				  <div className="app__body">
				  <Sidebar />
		  
				  <Feed />
				  
				  <Widgets />
				</div>
				</>
	);
}

export default Home;
