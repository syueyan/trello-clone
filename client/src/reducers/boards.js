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
      const returnedBoard = {...action.board} 
      delete returnedBoard.lists

      const existingBoard = state.find(board => {
        if (board._id === returnedBoard._id) {
          board = returnedBoard 
          return true
        }
        else return false
      })
      if (existingBoard) return [...state]
      return state.concat(returnedBoard)
    }  
    default:
      return state;
  }
}
