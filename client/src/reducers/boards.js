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
      // action.board contains the board from server which has _id, title, lists

      // our goal is to remove lists

      const {lists, ...boardWithoutLists} = action.board;

      // when you want to transform the state we use map method

      //.. when we want to delete something from the state we use filter

      // when we want to add something we use concat

      //option 1 just return that board and have the state cntain only that board

      //opiton 2 when yo uwant the state to contain all boards

      // return [boardWithoutLists]; // option 1 solution

      const board = state.find(b => b._id === action.board._id);

      if (!board) {
        return state.concat(boardWithoutLists)
      }

      return state;

      
        /*
        board: {
          _id::,
          title:
          lists: [
            list1: {
              _id.
              title,
              cards: [
                card1: {
                  _id.
                  title,
                  comments: [].
                  actions: []
                }
              ]
            }
          ]
        }
        */
         // board: {
      




      //const returnedBoard = {...action.board} 
     // delete returnedBoard.lists

      //const existingBoard = state.map(board => {
       // if (board._id === returnedBoard._id) {
      //    board = returnedBoard 
      //    return true
       // }
       // else return false
//////})
      //if (existingBoard) return [...state]
     // return state.concat(returnedBoard)
    }  
    default:
      return state;
  }
}
