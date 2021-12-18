import React, { useState } from "react";

function GifSearch({ onSubmitSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitSearch(search);
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="search">Enter a Search Term:</label>
          <input
            id="search"
            className="form-control"
            type="text"
            value={search}
            onChange={handleChange}
            />
        </div>
        <button type="submit" className="btn btn-success">Find Gifs</button>
      </form>
    </div>
  )
}

export default GifSearch;