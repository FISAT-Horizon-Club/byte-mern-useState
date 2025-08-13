import { useState } from "react";

function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setIsDark(!isDark)}>Toggle Mode</button>
    </div>
  );
}

export default DarkMode;
