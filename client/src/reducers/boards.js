import Card from "../components/ui/Card";

export default function boardsReducer(state = [], action) {
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
      const {lists, ...boardWithoutLists} = action.board;
      const board = state.find(b => b._id === action.board._id);

      if (!board) {
        return state.concat(boardWithoutLists)
      }
      return state;
    }
    default:
      return state;
  }
}
