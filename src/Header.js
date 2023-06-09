import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { Button } from 'react-bootstrap';

function Header() {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className="header">
			{/*  splitting header into 3 components */}

			<div className="header__left">
				<img
					className="i1"
					src="https://serving.photos.photobox.com/61203057d9e6c95528bd1560e33d3a28f80dc67e4e26de3409a295b82f1d67e30e5fe766.jpg"
					alt=""
				/>

				<div className="header__input">
					<SearchIcon />
					<input placeholder="Search Edgepost" type="text" />
				</div>
			</div>

			<div className="header__center">
				<div className="header__option header__option--active" onClick={()=>{window.location.reload()}}>
					<HomeIcon fontSize="large" />
				</div>

				<div className="header__option">
					<FlagIcon fontSize="large" />
				</div>

				<div className="header__option">
					<SubscriptionsIcon fontSize="large" />
				</div>

				<div className="header__option">
				<a href='https://www.facebook.com/marketplace'>
					<StorefrontIcon fontSize="large" />
					</a>
				</div>

				<div className="header__option">
					<SupervisedUserCircleIcon fontSize="large" />
				</div>
			</div>

			<div className="header__right">
				<div className="header__info">
					{/* <Avatar src={user.photoURL} /> */}
					{/* <h4>{user.displayName}</h4> */}
				</div>

				<IconButton>
					<AddIcon />
				</IconButton>

				<IconButton>
					<ForumIcon />
				</IconButton>

				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<Button onClick={() => {
						localStorage.clear()
						window.location.reload()
						dispatch({
							type: actionTypes.SET_USER,
							user: null
						})

					}}>Logout

					</Button>

				</IconButton>
			</div>
		</div>
	);
}

export default Header;
