export default function cardsReducer(state = [], action) {
  switch (action.type) {
    case "GET_BOARD_SUCCESS": {
      let newState = [...state]
      const returnedLists = Object.values(action.board.lists)
      const returnedCards = []
      returnedLists.forEach(list => {
        list.cards.forEach(card => returnedCards.push(card))
      })

      returnedCards.forEach(returnedCard => {
        const matchedCard = newState.find(card => {
          if (card._id === returnedCard._id) {
            card = returnedCard
            return true
          }
        })
        if (!matchedCard) newState.push(returnedCard)
      })
      return newState
    }
    default:
      return state;
  }
}

// dispatch an action to get some data (fetchBoard, createList, createCard, updateLIST)

// INSIDE OF THIS FUNCTION IN ACTIONS file /...we are sending a request to the server and each request is 
// defined in apiClient file

// once we get a response we invoke a callback function wchich dispatches the actual object

// dispatching ana ction (it is an object and it has to have a type property whic his =a string)
// and then it cas optional payload


// when this action is dispatched all reducer functions are called

// the action was create List