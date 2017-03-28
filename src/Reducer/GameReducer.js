import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    CurrentMove: 'X',
    Moves: []
}

function GameReducer(state, action) {
    if (typeof(state) === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case actionTypes.MOVE_TAKEN:
            var newMoves = state.Moves.slice(0);
            newMoves.push({
                RowIndex: action.GridNumber,
                Character: action.Character
            }); 

            return Object.assign({}, state, {
                CurrentMove: state.CurrentMove === 'X' ? 'O' : 'X',
                Moves: newMoves
            });
    }
}

export default GameReducer;