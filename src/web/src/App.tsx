import React, { FC, useEffect } from "react";

const App: FC = () => {
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error);
  }, []);

  return (
    <h1>
      It Works!{" "}
      <span role="img" aria-label="lol">
        👨🏻‍💻
      </span>
    </h1>
  );
};

export default App;
