import { Suspense, useState } from "react";

import React from "react";

function Susp() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <label>
        Search Album
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <h2>{query}</h2>
    </div>
  );
}

export default Susp;

function Loading() {
  return <h2>Loading ....</h2>;
}
