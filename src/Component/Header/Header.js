import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto gap-5">
            <Link to='/login' className='text-light fs-5' style={{
                textDecoration: 'none',
            }}>Log In</Link>
            <Link to='/register' className='text-light fs-5' style={{
                textDecoration: 'none',
            }}>Register</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
      

        </div>
    );
};

export default Header;