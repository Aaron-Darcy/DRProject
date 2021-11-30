//imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';//navbar
import Navbar from 'react-bootstrap/Navbar';//navbar
import Container from 'react-bootstrap/Container';//container
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";//for the routing

//main app method
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark" sticky="top">
              <Container>
                    <Navbar.Brand >Clothes</Navbar.Brand>
                      <Nav className="me-auto">
                          <Nav.Link >Latest</Nav.Link>
                          <Nav.Link >Men</Nav.Link>
                          <Nav.Link >Woman</Nav.Link>
                          <Nav.Link >Kids</Nav.Link>
                          <Nav.Link >Accessories</Nav.Link>
                      </Nav>
                </Container>
            </Navbar>
          </div>
        </Router>
        );
        }
    }

export default App;
