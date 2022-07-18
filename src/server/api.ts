import { remultExpress } from 'remult/remult-express';
import { Task } from '../shared/Task';

export const api = remultExpress({
	entities: [Task],
	initApi: async remult => {
		const taskRepo = remult.repo(Task);
		if (await taskRepo.count() === 0) {
			await taskRepo.insert([
				{ title: "Task a" },
				{ title: "Task b", completed: true },
				{ title: "Task c" },
				{ title: "Task d", description: 'test' },
				{ title: "Task e", completed: true },
				{ title: "Task f", description: 'test', completed: true }
			]);
		}
	}
});
