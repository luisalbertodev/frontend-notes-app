import React, { Component } from 'react';
import { BASE_URI } from '../Constants';
import axios from 'axios';

export class CreateUser extends Component {
	state = {
		username: '',
		users: [],
	};

	async componentDidMount() {
		this.getUsers();
	}

	getUsers = async () => {
		const { data } = await axios.get(`${BASE_URI}/api/users`);
		this.setState({ users: data });
	};

	onChangeUsername = (e) => {
		this.setState({ username: e.target.value });
	};

	onSubmit = async (e) => {
		e.preventDefault();
		await axios.post(`${BASE_URI}/api/users`, { username: this.state.username });
		this.setState({ username: '' });
		this.getUsers();
	};

	deleteUser = async (userId) => {
		const response = window.confirm('are you sure you want to delete it?');
		if (response) {
			await axios.delete(`${BASE_URI}/api/users/${userId}`);
			this.getUsers();
		}
	};

	render() {
		return (
			<div className="row">
				<div className="col-md-4">
					<div className="card card-body">
						<h3>Create New User</h3>
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<input
									className="form-control"
									value={this.state.username}
									type="text"
									onChange={this.onChangeUsername}
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Save
							</button>
						</form>
					</div>
				</div>
				<div className="col-md-8">
					<ul className="list-group">
						{this.state.users.map((user) => (
							<li
								className="list-group-item list-group-item-action"
								key={user._id}
								onDoubleClick={() => this.deleteUser(user._id)}
							>
								{user.username}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
