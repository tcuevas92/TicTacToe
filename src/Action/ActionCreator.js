import * as actionTypes from './ActionTypes';

export function MoveTaken(character, gridNumber) {
    return {
        type: actionTypes.MOVE_TAKEN,
        move: {
            Character: character,
            GridNumber: gridNumber
        }
    };
}

export function GameWon(winner) {
    return {
        type: actionTypes.GAME_FINSHED,
        winner: winner
    };
}