import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative flex-1 max-w-2xl">
      <input
        type="text"
        placeholder="Nə axtarırsınız?"
        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
      />
      <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
    </div>
  );
}