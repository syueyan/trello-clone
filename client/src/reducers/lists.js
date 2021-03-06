export default function listsReducer(state = [], action) {
  switch (action.type) {
    case "GET_BOARD_SUCCESS": {
      let newState = [...state]
      const returnedLists = Object.values(action.board.lists)
      returnedLists.forEach(returnedList => {
        returnedList = { ...returnedList }
        delete returnedList.cards
        const matchedList = newState.find(list => {
          if (list._id === returnedList._id) {
            list = returnedList
            return true
          }
        })
        if (!matchedList) newState.push(returnedList)
      })
      return newState
    } case "LIST_CREATED": {
      return state.concat(action.list)
    } case "LIST_EDIT": {
      console.log(action.list)
      return state.map(list => {
        if (list._id === action.list._id) {
          return action.list
        }
        return list
      })
    }

    default:
      return state;
  }
}