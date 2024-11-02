import React from "react";
import { Button } from "@/components/ui/button";
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
  LetterText,
  WholeWord,
  Calendar,
  Mail,
  FilePenLine,
} from "lucide-react";
export default function Users() {
  const data = [
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
    {
      name: "Jon Snow",
      username: "snow1231",
      joined_date: "2024-03-02",
      email: "jonsnow@gmail.com",
    },
  ];
  return (
    <div className="px-2 py-4">
      <Table className="text-[#CFDBD5] w-10/12 mx-auto mt-12 bg-[#212121]">
        <TableCaption>A list of user accounts.</TableCaption>
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="border border-[#343a40] border-opacity-40 text-[#868e96]">
              <div className="flex gap-2 items-center">
                <LetterText />
                Name
              </div>
            </TableHead>
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
                <FilePenLine />
                Actions
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* loop here */}
          {data &&
            data.map((item, index) => (
              <TableRow key={index} className="border-none">
                <TableCell className="border border-[#343a40] border-opacity-40">
                  {item.name}
                </TableCell>
                <TableCell className="border border-[#343a40] border-opacity-40">
                  {item.username}
                </TableCell>
                <TableCell className="border border-[#343a40] border-opacity-40">
                  {item.joined_date}
                </TableCell>
                <TableCell className="border border-[#343a40] border-opacity-40">
                  {item.email}
                </TableCell>
                <TableCell className="border border-[#343a40] border-opacity-40 flex justify-center gap-4 px-0">
                  <Button className="bg-[#50504f] text-[#E8EDDF]">Edit</Button>
                  <Button className="bg-[#50504f] text-[#E8EDDF]">
                    Delete
                  </Button>
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
