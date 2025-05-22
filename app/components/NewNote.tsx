import { Form } from "@remix-run/react";

export default function NewNote() {
	return (
		<Form method="post" className="space-y-4">
			<div>
				<label
					htmlFor="title"
					className="block text-sm font-medium text-gray-700"
				>
					Title
				</label>
				<input
					type="text"
					id="title"
					name="title"
					required
					className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					placeholder="Enter note title"
				/>
			</div>

			<div>
				<label
					htmlFor="content"
					className="block text-sm font-medium text-gray-700"
				>
					Content
				</label>
				<textarea
					id="content"
					name="content"
					rows={4}
					required
					className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					placeholder="Enter note content"
				/>
			</div>

			<button
				type="submit"
				className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				Create Note
			</button>
		</Form>
	);
}
