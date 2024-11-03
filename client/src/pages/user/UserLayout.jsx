import { Outlet } from 'react-router-dom';
import UserFooterBar from '@/components/UserFooterBar';
import UserTopBar from '@/components/UserTopBar';

export default function UserLayout() {
	return (
		<div className="w-[391px] h-screen bg-[#201c1c] font-Inter">
			<UserTopBar />
			<UserFooterBar />
			<Outlet /> {/* Renders the matched child route */}
		</div>
	);
}
