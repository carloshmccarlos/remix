import NewNote from "~/components/NewNote";
import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Temporary in-memory storage
const notes: { id: string; title: string; content: string }[] = [];

function NotesPage() {
	const notes = useLoaderData<typeof loader>();
	
	return (
		<main className="max-w-4xl mx-auto p-4">
			<NewNote />
			<div className="mt-8 space-y-4">
				{notes.map((note) => (
					<div key={note.id} className="p-4 border rounded-lg shadow-sm">
						<h2 className="text-xl font-semibold">{note.title}</h2>
						<p className="mt-2 text-gray-600">{note.content}</p>
					</div>
				))}
			</div>
		</main>
	);
}

export default NotesPage;

export async function loader() {
	return json(notes);
}

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const title = formData.get("title");
	const content = formData.get("content");

	// Basic validation (optional)
	if (typeof title !== "string" || typeof content !== "string" || !title || !content) {
		return json({ error: "Title and content are required." }, { status: 400 });
	}

	// Create new note
	const newNote = {
		id: crypto.randomUUID(),
		title,
		content,
	};
	notes.push(newNote);

	// Redirect or return a success response
	return redirect("/notes");
}
