import React, { useEffect, useState } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("dolphin");

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=PIbcX6j19iwwKYsdCqWhzHJKFQhIe6HO&rating=g&limit=3`)
      .then(r => r.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  }, [search]);

  return (
    <div>
      <GifSearch onSubmitSearch={setSearch} />
      <GifList gifs={gifs} />
    </div>
  )
}

export default GifListContainer;