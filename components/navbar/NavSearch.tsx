import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button';
import { FaSearch } from "react-icons/fa";
export default function NavSearch() {
  return (
    <div className="flex rounded-full shadow px-6 items-center gap-3 w-[30vw]">
      <Input
        type="text"
        placeholder="Search destinations"
        className="max-w-xs dark:bg-muted shadow-none border-none focus:ring-0 rounded-full py-5 hover:bg-gray-100 hover:cursor-pointer focus:outline-none  focus:!border-none active:outline-none active:border-none"
      />
      <Button
        asChild
        className="rounded-full h-[1.5rem] justify-self-end w-[2rem] m-[0.1rem] p-2 bg-[#ff3838] hover:bg-[#ff3838d9] hover:cursor-pointer hover:opacity-100"
      >
        <FaSearch />
      </Button>
    </div>
  );
}
