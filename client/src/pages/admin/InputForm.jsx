import { Input } from "@/components/ui/input";

export default function InputForm({ id, type, defaultValue = null }) {
  return (
    <Input
      type={type}
      defaultValue={defaultValue}
      id={id}
      className="outline-none border-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded"
    />
  );
}
