import { useState } from "react";

// Another method to define function
const TextLength = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Characters: {text.length}</p>
    </div>
  );
};

export default TextLength;
