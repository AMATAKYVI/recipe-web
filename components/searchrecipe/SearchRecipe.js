import { Search } from 'lucide-react';
import React from 'react';

function SearchRecipe() {
  return (
    <div className="text-center flex items-center justify-center gap-3">
      <input
        type="search"
        name="recipesearch"
        id="recipesearch"
        className="bg-gray-100 px-5 py-2 rounded-lg border outline-none"
        placeholder="Search for recipes..."
      />
      <div className="bg-gray-100 px-2 py-2 rounded-lg">
        {' '}
        <Search className="w-5 h-5 text-gray-700" />
      </div>
    </div>
  );
}

export default SearchRecipe;
