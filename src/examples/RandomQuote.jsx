import { useState } from "react";

export default function RandomQuote() {
  const quotes = [
    "React is awesome!",
    "Learning never stops.",
    "Code. Debug. Repeat.",
    "UseState is powerful!"
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{quote}</h2>
      <button onClick={getRandomQuote}>New Quote</button>
    </div>
  );
}