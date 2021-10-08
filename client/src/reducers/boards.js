export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS": {
      return action.boards;
    }
    case "CREATE_BOARD_SUCCESS": {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    case "GET_BOARD_REQUEST": {
      return state;
    }
    case "GET_BOARD_SUCCESS": {
      console.log(action.boards)
      return state;
    }
    default:
      return state;
  }
}
