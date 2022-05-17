import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BetslipState } from "../../Context/Context";

const Betslip = () => {
	const {
		state: { betslip },
		dispatch
	} = BetslipState();
	const [total, setTotal] = useState();

	useEffect(() => {
		setTotal(
			betslip.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
		);
	}, [cart]);

	return (
		<div className="home">
			<div className="productContainer">
				<ListGroup>
					{betslip.map(pick => (
						<ListGroup.Item key={pick.id}>
							<Row>
								<Col md={2}>
									<Image src={pick.image} alt={pick.name} fluid rounded />
								</Col>
								<Col md={2}>
									<span>{pick.name}</span>
								</Col>
								<Col md={2}>₹ {pick.price}</Col>
								<Col md={2}>
									<Rating rating={pick.ratings} />
								</Col>
								<Col md={2}>
									<Form.Control
										as="select"
										value={pick.qty}
										onChange={e =>
											dispatch({
												type: "CHANGE_CART_QTY",
												payload: {
													id: pick.id,
													qty: e.target.value
												}
											})
										}
									>
										{[...Array(pick.inStock).keys()].map(x => (
											<option key={x + 1}>{x + 1}</option>
										))}
									</Form.Control>
								</Col>
								<Col md={2}>
									<Button
										type="button"
										variant="light"
										onClick={() =>
											dispatch({
												type: "REMOVE_FROM_CART",
												payload: pick
											})
										}
									>
										<AiFillDelete fontSize="20px" />
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>
					))}
				</ListGroup>
			</div>
			<div className="filters summary">
				<span className="title">({betslip.length}) pennding items</span>

				<Button type="button" disabled={cart.length === 0}>
					Submit Picks
				</Button>
			</div>
		</div>
	);
};

export default Betslip;
