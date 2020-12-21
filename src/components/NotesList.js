import React from 'react';
import { BASE_URI } from '../Constants';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import axios from 'axios';

export const NotesList = () => {
	const [notes, setNotes] = React.useState([]);

	const getAllNotes = React.useCallback(async () => {
		const { data, status } = await axios(`${BASE_URI}/api/notes`);
		console.log(status);
		setNotes(data);
	}, []);

	React.useEffect(() => {
		getAllNotes();
	}, []);

	console.log(notes);

	const deleteNote = async (noteId) => {
		await axios.delete(`${BASE_URI}/api/notes/${noteId}`);
		getAllNotes();
	};

	return (
		<div className="row">
			{notes.map((note) => (
				<div className="col-md-4 p-2" key={note._id}>
					<div className="card">
						<div className="card-header d-flex justify-content-between">
							<h5>{note.title}</h5>
							<Link to={'/edit/' + note._id} className="btn btn-secondary">
								<i className="material-icons">Edit</i>
							</Link>
						</div>
						<div className="card-body">
							<p>{note.content}</p>
							<p>Author: {note.author}</p>
							<p>{format(note.createdAt)}</p>
						</div>
						<div className="card-footer">
							<button className="btn btn-danger" onClick={() => deleteNote(note._id)}>
								Delete
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
