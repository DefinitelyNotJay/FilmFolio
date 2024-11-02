import { Outlet } from 'react-router-dom';
import UserFooterBar from '@/components/UserFooterBar';
import UserTopBar from '@/components/UserTopBar';
import { useParams } from 'react-router-dom';
export default function UserLayout() {
  const params = useParams()
  console.log(params)
	return (
		<div className="w-[391px] h-screen bg-[#201c1c] font-Inter">
			<UserTopBar />
			<UserFooterBar />
			<Outlet /> {/* Renders the matched child route */}
		</div>
	);
}
