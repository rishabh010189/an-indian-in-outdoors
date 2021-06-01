import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function MainHeader() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link href="/">
        <a
          className="navbar-brand"
          style={{ "font-family": "Rancho", "font-size": "2em" }}
        >
          AnIndianInOutdoors
        </a>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link className="nav-link" href="/events">
            <a className="nav-link">All Events</a>
          </Link>
        </Nav>
        <Form inline className="d-none d-sm-block">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainHeader;
