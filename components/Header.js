import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {
	Container,
	Nav,
	NavItem,
	Button,
	Badge,
	Dropdown,
	FormControl
} from "react-bootstrap";

import { GrNotes } from "react-icons/gr";

function Header() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bar">
				<Container>
					<Navbar.Brand href="#home">DailyPicks</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Navbar.Text>
								<FormControl
									style={{ width: 500 }}
									type="search"
									placeholder="Search for game..."
									className="m-auto"
									aria-label="Search"
								/>
							</Navbar.Text>
						</Nav>

						<Nav>
							<Dropdown
								as={NavItem}
								className="d-inline mx-4"
								autoClose={false}
								align="end"
							>
								<Dropdown.Toggle id="dropdown-autoclose-false">
									<GrNotes fontSize="25px" /> <Badge>{2}</Badge>
								</Dropdown.Toggle>

								<Dropdown.Menu className="bet-slip-dropdown-menu">
									<Dropdown.Header>Pending Picks</Dropdown.Header>
									<Dropdown.Item>Menu Item</Dropdown.Item>
									<Dropdown.Item>Menu Item</Dropdown.Item>
									<Dropdown.Divider />
									<div className="dropdown-footer">
										<div>
											<Button
												variant="primary"
												style={{ margin: "0 10px", padding: "5px 60px" }}
											>
												Submit Picks
											</Button>
										</div>
										<div>
											<Button
												variant="danger"
												style={{ margin: "0 10px", padding: "5px 60px" }}
											>
												Remove All
											</Button>
										</div>
									</div>
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
