import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import { Toggle } from 'Utilities';
import { Modal } from 'Elements';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Toggle>
					{({ on, toggle }) => (
						<Fragment>
							<button onClick={toggle}>Open</button>
							<Modal on={on} toggle={toggle}>
								<h1>Still a modal</h1>
							</Modal>
						</Fragment>
					)}
				</Toggle>
			</div>
		);
	}
}

export default App;
