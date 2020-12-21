import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { CreateNote } from './components/CreateNote';
import { CreateUser } from './components/CreateUser';
import { NotesList } from './components/NotesList';
import { NotFound } from './components/NotFound';

const App = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/" component={NotesList} />
				<Route path="/edit/:id" component={CreateNote} />
				<Route path="/create" component={CreateNote} />
				<Route path="/user" component={CreateUser} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
};

export default App;
