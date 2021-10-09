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