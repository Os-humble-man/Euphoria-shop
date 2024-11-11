import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <form className=" relative">
      <Search size={18} className=" absolute top-[9px] left-3 text-gray-400" />
      <Input
        type="search"
        placeholder="Search "
        className="w-full bg-gray-100 text-gray-400  outline-none pl-10 py-2"
      />
    </form>
  );
}
