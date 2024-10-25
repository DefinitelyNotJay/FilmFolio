import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputForm from "./InputForm";
export default function EditMovie() {
  const { id } = useParams();

  return (
    <div className="px-4 py-4">
      <h1 className="font-bold text-2xl text-[#e7e7e7]">Movies details</h1>
      <div className="w-full">
        <form action="" className="w-1/2 flex flex-col gap-3 text-[#e7e7e7]">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <InputForm id="title" type="text"/>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="synopsis">Synopsis</Label>
            <Textarea id="synopsis" type="text" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="year">Year</Label>
            <InputForm id="year" type="number"/>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select categories"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="adventure">Adventure</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="bg-[#f5cb5c]">SAVE CHANGES</Button>
        </form>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}
