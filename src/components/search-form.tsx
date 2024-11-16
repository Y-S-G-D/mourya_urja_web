import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div className="relative mx-auto">
      <Input
        id="search"
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-0 focus:outline-none placeholder-gray-500"
      />
      <SearchIcon className="w-5 h-5 text-gray-500 absolute top-1/2 left-3 transform -translate-y-1/2" />
    </div>
  );
}
