import { Entity, Fields } from "remult";

@Entity("tasks", {
	allowApiCrud: true
})
export class Task {
	@Fields.uuid()
	id!: string;

	@Fields.string()
	title = '';
	
	@Fields.string()
	description = '';

	@Fields.boolean()
	completed = false;
}