import { useState, useEffect } from "react";
import axios from "axios";

function JokeFetch() {
  const [joke, setJoke] = useState("");
  
//   useEffect(() => {
//     getJoke();
//   }, []);

  const getJoke = async () => {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    setJoke(`${response.data.setup} - ${response.data.punchline}`);
  };

  return (
    <div>
      <h2>😂 Random Joke</h2>
      <p>{joke}</p>
      <button onClick={getJoke}>Get New Joke</button>
    </div>
  );
}

export default JokeFetch;
