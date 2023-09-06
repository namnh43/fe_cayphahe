import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import React from "react";
import {useNavigate} from "react-router";

export function Menubar() {
    const navigate = useNavigate();
    return (
        <>

            <Navbar className="bg-body-tertiary " sticky="top">
                <Navbar.Brand className="ms-5">Icon avatar</Navbar.Brand>
                <Nav className="justify-content-center w-100">
                    <Nav.Link
                        onClick={() => navigate('/')}
                    >
                        Home</Nav.Link>
                    <Nav.Link>Menu 1</Nav.Link>
                    <Nav.Link>Menu 2</Nav.Link>
                </Nav>
            </Navbar>
        </>

    );
}