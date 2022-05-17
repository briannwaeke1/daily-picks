import React from "react";
import styles from "./Header.module.css";

import Navbar from "react-bootstrap/Navbar";
import {
	Container,
	Nav,
	NavItem,
	Button,
	Badge,
	Dropdown
} from "react-bootstrap";

import { GrNotes } from "react-icons/gr";
import { BetslipState } from "../Context/Context";

function Header() {
	const { state } = BetslipState();
	console.log(state);
	return (
		<div>
			<Navbar
				collapseOnSelect
				expand="lg"
				variant="dark"
				className={styles.navbar}
			>
				<Container>
					<Navbar.Brand>DailyPicks</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>

						<Nav>
							<Dropdown as={NavItem} autoClose={false} align="end">
								<Dropdown.Toggle id="dropdown-autoclose-false">
									<GrNotes fontSize="25px" /> <Badge>{2}</Badge>
								</Dropdown.Toggle>

								<Dropdown.Menu className={styles.betSlipDropdown}>
									<Dropdown.Header>Pending Picks</Dropdown.Header>
									<Dropdown.Item>Menu Item</Dropdown.Item>
									<Dropdown.Item>Menu Item</Dropdown.Item>
									<Dropdown.Divider />
									<div className={styles.dropdownFooter}>
										<div>
											<Button
												variant="primary"
												className={styles.submitPicksButton}
											>
												Submit Picks
											</Button>
										</div>
										<div>
											<Button
												variant="danger"
												className={styles.removeAllButton}
											>
												Remove All
											</Button>
										</div>
									</div>
								</Dropdown.Menu>
							</Dropdown>
							<Nav.Link
								eventKey={2}
								href="#login"
								className={styles.loginButton}
							>
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
