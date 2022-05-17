import { createContext, useContext, useReducer } from "react";

import { betslipReducer, gameReducer } from "./Reducers";

const Betslip = createContext();

const Context = ({ children }) => {
	const games = [
		{
			id: 1,
			name: "Miami Heat @ Philadelphia 76ers",
			time: "2022-05-06T19:00:00",
			date: "2022-05-06T19:00:00",
			channel: "ESPN",
			awayTeamName: "Miami Heat",
			awayTeamShort: "Heat",
			homeTeamName: "Philadelphia 76ers",
			homeTeamShort: "76ers",
			awayTeamLogo:
				"https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg",
			homeTeamLogo:
				"https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg"
		},

		{
			id: 2,
			name: "Phoenix Suns @ Dallas Mavericks",
			time: "2022-05-06T21:30:00",
			date: "2022-05-06T21:30:00",
			channel: "TNT",
			awayTeamName: "Phoenix Suns",
			awayTeamShort: "Suns",
			homeTeamName: "Dallas Mavericks",
			homeTeamShort: "Mavericks",
			awayTeamLogo:
				"https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg",
			homeTeamLogo:
				"https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg"
		}
	];

	const [state, dispatch] = useReducer(betslipReducer, {
		games: games,
		betslip: []
	});

	const [gameState, gameDispatch] = useReducer(gameReducer, {
		homeTeamSelected: false,
		awayTeamSelected: false
	});

	console.log(gameState);

	return (
		<Betslip.Provider value={{ state, dispatch, gameState, gameDispatch }}>
			{children}
		</Betslip.Provider>
	);
};

export const BetslipState = () => {
	return useContext(Betslip);
};

export default Context;
