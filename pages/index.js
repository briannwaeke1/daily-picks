import { BetslipState } from "../Context/Context";
import GameCard from "../components/Game/Game";

const Index = () => {
	const {
		state: { games },
		gameState: { sort }
	} = GameState();
	return (
		<div className="home">
			<div className="productContainer">
				{transformProducts().map(prod => (
					<GameCard game={game} key={game.id} />
				))}
			</div>
		</div>
	);
};

export default Index;
