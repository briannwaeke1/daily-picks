import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavItem } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

function Header() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bar">
				<Container>
					<Navbar.Brand href="#home">DailyPicks</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#upcoming">Home</Nav.Link>
							<Nav.Link href="#pricing">Leaderboard</Nav.Link>
						</Nav>
						<Nav>
							<Dropdown
								as={NavItem}
								className="d-inline mx-4"
								autoClose={false}
								align="end"
							>
								<Dropdown.Toggle id="dropdown-autoclose-false">
									Bet Slip
								</Dropdown.Toggle>

								<Dropdown.Menu className="bet-slip-dropdown-menu">
									<Dropdown.Header>Pending Picks</Dropdown.Header>
									<Dropdown.Item href="#">Menu Item</Dropdown.Item>
									<Dropdown.Item href="#">Menu Item</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item href="#">Menu Item</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Nav.Link eventKey={2} href="#memes">
								Log in
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
