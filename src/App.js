import React, { Component, Fragment, createContext } from 'react';
import { Transition } from 'react-spring';

import logo from './logo.svg';
import './App.css';
import User from './User';
import UserProvider from './UserProvider';
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <User />
          <section>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button onClick={toggle}>Show / Hide</button>
                  <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
                    {on && Header}
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>
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
      </UserProvider>
    );
  }
}

const Header = styles => (
  <Card style={{ ...styles }}>
    <h1>showme</h1>
  </Card>
);

export default App;
