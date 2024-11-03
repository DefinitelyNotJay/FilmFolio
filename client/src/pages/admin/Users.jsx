import {useEffect} from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  WholeWord,
  Calendar,
  Mail,
  ContactRound
} from "lucide-react";
import axios from "axios";
import { url } from "@/App";
import { useState } from "react";
export default function Users() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get(`${url}/auth/users`)
      .then((res)=>{
        const usersData = res.data
        const data = usersData.map(user=>{
          const dateStr = user.createdAt;
          const date = new Date(dateStr);
         

          const months = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
          ];
const formattedDate = `${String(date.getDate()).padStart(2, '0')} ${months[date.getMonth()]} ${date.getFullYear()}`;

          return {...user, createdAt: formattedDate}
        })
        
        setUsers(data)
      })
  }, [])
  return (
    <div className="px-2 py-4">
      <Table className="text-[#CFDBD5] w-10/12 mx-auto mt-12 bg-[#212121]">
        <TableCaption>A list of user accounts.</TableCaption>
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="border border-[#343a40] border-opacity-40 text-[#868e96]">
              <div className="flex gap-2 items-center">
                <WholeWord />
                Username
              </div>
            </TableHead>
            <TableHead className="border border-[#343a40] border-opacity-40 text-[#868e96]">
              <div className="flex gap-2 items-center">
                <Calendar />
                Joined date
              </div>
            </TableHead>
            <TableHead className="border border-[#343a40] border-opacity-40 text-[#868e96]">
              <div className="flex gap-2 items-center">
                <Mail />
                Email
              </div>
            </TableHead>
            <TableHead className="border border-[#343a40] border-opacity-40 text-[#868e96]">
              <div className="flex gap-2 items-center">
              <ContactRound />
                Role
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* loop here */}
          {users &&
            users.map((user, index) => (
              <TableRow key={index} className="border-none">
                <TableCell className="border border-[#343a40] border-opacity-40">
                  {user.username}
                </TableCell>
                <TableCell className="border border-[#343a40] border-opacity-40">
                  {user.createdAt}
                </TableCell>
                <TableCell className="border border-[#343a40] border-opacity-40">
                  {user.email}
                </TableCell>
                <TableCell className="border border-[#343a40] border-opacity-40">
                  {user.isAdmin ? "Administrator" : "User"}
                </TableCell>
                
              </TableRow>
            ))}

          {/* end loop here */}
        </TableBody>
      </Table>
    </div>
  );
}

// black: {
//           100: "#d3d3d3",
//           200: "#a7a7a7",
//           300: "#7c7c7b",
//           400: "#50504f",
//           500: "#242423",
//           600: "#1d1d1c",
//           700: "#161615",
//           800: "#0e0e0e",
//           900: "#070707"
// },
