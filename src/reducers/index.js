const boardInitialState = {
    pos : [
    "rnbqkbnr",
    "pppppppp",
    "........",
    "........",
    "........",
    "........",
    "PPPPPPPP",
    "RNBQKBNR",
  ],
};

export function boardReducer(state = boardInitialState, action) {
    switch(action.type){
        case 'MOVE_PIECE':
            break;
        default:
            return boardInitialState.pos;
    }
}