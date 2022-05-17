export const betslipReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BETSLIP":
			return {
				...state,
				betslip: [...state.betslip, { ...action.payload, qty: 1 }]
			};
		case "REMOVE_FROM_BETSLIP":
			return {
				...state,
				betslip: state.betslip.filter(c => c.i !== action.payload.id)
			};
		default:
			return state;
	}
};

export const gameReducer = (state, action) => {
	switch (action.type) {
		case "SELECT_HOME_TEAM":
			return { ...state, homeTeamSelected: !state.homeTeamSelected };
		case "SELECT_AWAY_TEAM":
			return { ...state, awayTeamSelected: !state.awayTeamSelected };
		case "UNSELECT_HOME_TEAM":
			return { ...state, homeTeamSelected: !state.homeTeamSelected };
		case "UNSELECT_AWAY_TEAM":
			return { ...state, awayTeamSelected: !state.awayTeamSelected };
		case "CLEAR_SELECTIONS":
			return { homeTeamSelected: false, awayTeamSelected: false };
		default:
			return state;
	}
};
