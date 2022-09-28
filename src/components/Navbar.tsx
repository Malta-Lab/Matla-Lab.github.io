import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavigationBar() {
    const [current, setCurrent] = useState<string>();

    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand>Machine Learning Theory and Applications</Navbar.Brand>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="nav-auto">
                        <Nav.Link href="#home" onClick={() => setCurrent('home')}>Home</Nav.Link>
                        <Nav.Link href="#team" onClick={() => setCurrent('team')}>Team</Nav.Link>
                        <Nav.Link href="#projects" onClick={() => setCurrent('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#research" onClick={() => setCurrent('research')}>Research</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}