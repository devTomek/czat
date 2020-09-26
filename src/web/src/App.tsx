import React, { FC } from "react";
import useTasks from "./useTasks";

const App: FC = () => {
	const [tasks] = useTasks();

  return (
    <div>
      It Works!{" "}
      <span role="img" aria-label="lol">
        👨🏻‍💻
      </span>
			{tasks.map(({task}, index) => <h1 key={index}>{task}</h1>)}
    </div>
  );
};

export default App;
