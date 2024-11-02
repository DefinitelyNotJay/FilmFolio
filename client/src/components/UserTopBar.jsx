import React from 'react';
import { ChevronLeft, LogOut } from 'lucide-react';
import { useContext } from 'react';
import { AuthContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const UserTopBar = () => {
	const navigate = useNavigate();
	const { user, dispatch } = useContext(AuthContext);
	const handleLogout = () => {
		localStorage.removeItem('token'); // or however you store your token
		dispatch({ type: 'LOGOUT' });
		navigate('/login');
	};

	return (
		<div className="w-full flex justify-between px-2 py-4 text-white">
			<div
				className="cursor-pointer"
				onClick={() => {
					navigate(-1);
				}}
			>
				<ChevronLeft className="rounded-full hover:bg-gray-800 p-1" height={32} width={32} />
			</div>
			<p className="text-lg select-none">{user.username}</p>
			<div className="cursor-pointer" onClick={handleLogout}>
				<LogOut />
			</div>
		</div>
	);
};

export default UserTopBar;
