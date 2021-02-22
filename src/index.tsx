import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, CreateCharacter } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav} from 'react-bootstrap';
import logo from './assets/img/marvel_logo.png';
import './styles.css'

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom';

render(
  <React.StrictMode>
		<Router>
    <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
          <img
            alt="Coding Drone Members"
            src={logo}
            width="100"
            className="d-inline-block align-top"
          />{' '}
					<Link to="/">Marvel Characters API</Link>
        </Navbar.Brand>
			{/* Nav Items to the right  */}
      <Nav className="move-nav" activeKey="/">
        
				<Nav.Item>
				{/* Item is a child component of Nav */}
          <Nav.Link>
            <Link to='/'> Home </Link>
          </Nav.Link>
        </Nav.Item>

				<Nav.Item>
          <Nav.Link>
            <Link to='/create'> Create a Character </Link>
          </Nav.Link>
        </Nav.Item>
      
			</Nav>

      </Navbar>
			<Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <CreateCharacter />
        </Route>
      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
