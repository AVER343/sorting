import './sortingHeader.css'

import {Button, Form, Nav, Navbar} from 'react-bootstrap'

import Homepage from '../homepage/homepage'
import React from 'react'

class SortingHeader extends React.Component{
    state={ }
    render(){
        return(<div>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <Homepage/>
            </div>)
    }
}
export default SortingHeader