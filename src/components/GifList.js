import React from "react";

function GifList({gifs}) {
  console.log(gifs)

  const gifList = gifs.map(gif => (
    <li key={gif.url}>
      <img src={gif.url} alt="gif" />
    </li>
  ))
  
  return (
    <ul>
      {gifList}
    </ul>
  )
}

export default GifList;