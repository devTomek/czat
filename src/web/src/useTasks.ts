import { useState, useEffect } from "react";

interface ITask {
	task: string;
}

const useTasks = (): [ITask[]] => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	useEffect(() => {
		fetch("/api/todos")
			.then((res) => res.json())
			.then(setTasks)
			.catch(console.error);
	}, []);

	return [tasks];
};

export default useTasks;
