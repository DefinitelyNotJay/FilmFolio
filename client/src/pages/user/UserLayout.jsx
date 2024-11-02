import { Outlet } from 'react-router-dom';
import UserFooterBar from '@/components/UserFooterBar';
export default function UserLayout() {
	return (
		<div className="w-[390px] h-screen  bg-[#282424]  font-Inter">
			<UserFooterBar />
			<Outlet /> {/* Renders the matched child route */}
		</div>
	);
}
