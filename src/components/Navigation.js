import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Notes App
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<ul className="navbar-nav">
						<Link className="nav-link active" aria-current="page" to="/">
							Notes
						</Link>

						<Link className="nav-link" to="/user">
							Create user
						</Link>

						<Link className="nav-link" to="/create">
							Create note
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
