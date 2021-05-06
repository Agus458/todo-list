import React, { useState } from "react";
import TasksList from "./TasksList";

export function Home() {
	const [task, setTask] = useState("");
	const [tasksList, setTasksList] = useState([]);
	const [cantTasks, setCantTasks] = useState(0);

	function addTask(event) {
		event.preventDefault();
		setTask("");
		if (cantTasks < 8 && task != "") {
			tasksList.push(task);
			setCantTasks(cantTasks + 1);
		}
	}

	function removeTask(pos) {
		tasksList.splice(pos, 1);
		setCantTasks(cantTasks - 1);
	}

	return (
		<div className="container text-center">
			<h1>todos</h1>
			<div className="card brown shadow-lg">
				<div className="card-body">
					<form action="" onSubmit={addTask}>
						<input
							type="text"
							className="form-control"
							id="task"
							placeholder={
								tasksList.length > 0
									? "Add a new task"
									: "There is no task"
							}
							onChange={event => {
								setTask(event.target.value);
							}}
							value={task}
						/>
					</form>
				</div>
				<TasksList tasksList={tasksList} removeFromList={removeTask} />
				<div className="card-body">
					<p>{8 - cantTasks} remaining</p>
				</div>
			</div>
		</div>
	);
}
