import React from "react";
import './styles/Nav.css'
import SearchBar from './SearchBar.jsx';
import { Nav, Navbar} from "react-bootstrap"
import { Link } from 'react-router-dom';
//  <SearchBar
// onSearch={onSearch}
// />
export default function Navigation({onSearch}){
      return (
        <Navbar
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
          className="px-4 py-8"
          fixed="top"
        >
          <Navbar.Brand>WeatherApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-na" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto align-items-end px-3">
              <Nav.Link as={Link} to='/' >Home</Nav.Link>
              <Nav.Link as={Link} to='/weather'>weather</Nav.Link>
            </Nav>
            <Nav className="ml-auto align-items-end px-3">
              <SearchBar onSearch={onSearch} />
              <Nav.Link className="pl-4" as={Link} to='/about'>About me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }