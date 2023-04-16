import React, { useState } from 'react';
import { useMutation, useQuery } from "../convex/_generated/react";


function App() {
  const [searchInput, setSearchInput] = useState('');
  const grabInfo = useQuery("grabRelevantDishes", {clientSearch: searchInput});
  console.log(grabInfo)
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  }



  return (
    <form>
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
    
  );
}

export default App;



/*
import React, { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";


function App() {

 const grabInfo = useMutation("grabRelevantDishes");

  async function handleSearch(event) {
    event.preventDefault();
    await grabInfo({ body:  value});
  }

  return (
    <form onSubmit={handleSearch}>
      <label>
        Search:
        <input type="text" value={search} onChange={handleSearch} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
*/
