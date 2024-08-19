import MonthlySubscriber from "@/components/dashboard/MonthlySubscriber";
import MostPopularGenres from "@/components/dashboard/MostPopularGenres";
import UserEngagementTrends from "@/components/dashboard/UserEngagementTrends";
import { Input } from "@/components/ui/input";
import { Clapperboard, Search } from "lucide-react";
import { UserCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-full px-8 py-8">
      <h1 className="text-2xl text-white">Movies Dashboard</h1>
      <div className="h-full w-full grid grid-cols-3 gap-x-4 gap-y-0 mt-4">
        <div className="grid grid-rows-2 h-full gap-y-4">
          <div className="bg-[#333] max-h-[360px] p-4">
            <p className=" text-[#e7e7e7]">Monthly Subscribers</p>
            <div className="w-full h-full mt-6">
              <MonthlySubscriber />
            </div>
          </div>
          <div className="bg-[#333] max-h-[360px] p-4">
            <p className=" text-[#e7e7e7]">User Engagement Trends</p>
            <div className="w-full h-full mt-4">
              <UserEngagementTrends />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-y-4 h-full">
          <div className=" bg-[#333] w-full p-4 max-h-[360px]">
            <p className=" text-[#e7e7e7]">Popular Movie Genres</p>
            <div className="w-full h-full mt-2">
              <MostPopularGenres />
            </div>
          </div>
          <div className="grid grid-rows-3 gap-y-4 text-center">
            <div className="bg-[#333] flex flex-col justify-center gap-1 px-4 py-1">
              <UserCheck
                className="self-center rounded-md p-2  text-[#333] bg-[#F5CB5C]"
                size={32}
              />
              <p className=" text-[#e7e7e7] text-sm">Number of Subscribers</p>
              <p className=" text-[#e7e7e7] text-2xl font-semibold">5,000</p>
            </div>
            <div className="bg-[#333] flex flex-col justify-center gap-1 px-4 py-1">
              <Clapperboard
                className="self-center rounded-md p-2  text-[#333] bg-[#F5CB5C]"
                size={32}
              />
              <p className=" text-[#e7e7e7] text-sm">Number of Movies</p>
              <p className=" text-[#e7e7e7] text-2xl font-semibold">120</p>
            </div>
            <div className="bg-[#333] flex flex-col justify-center gap-1 px-4 py-1">
              <UserCheck
                className="self-center rounded-md p-2  text-[#333] bg-[#F5CB5C]"
                size={32}
              />
              <p className=" text-[#e7e7e7] text-sm">
                Number of Comments Today
              </p>
              <p className=" text-[#e7e7e7] text-2xl font-semibold">1,300</p>
            </div>
          </div>
        </div>
        <div className="h-full bg-[#333] px-4 py-4">
          <h2 className="text-[#e7e7e7]">Popular movies</h2>
          {/* search bar */}
          <div className="relative text-inherit">
            <Input type="text" className="rounded-full mt-4 px-10 text-lg"/>
            <Search className="text-[#333] absolute top-2 left-2"/>
            <div className="flex flex-col items-center mt-4">
            {/* loop here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
