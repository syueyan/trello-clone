import React from "react"
import { useSelector } from "react-redux"

const ExistingCard = ({listId}) => {
  const cards = useSelector(state => state.cards)

  const cardTiles = cards.map(card => {
    console.log(card.listId, listId)
    if (card.listId !== listId) return 
    return (
      <div className="card-background">
        <div className="card ">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            {card.labels.map(color => {
              return (
                <div className={`card-label ${color} colorblindable`}></div>
              )
            })}
            <p>
              {card.title}
            </p>
          </div>
          <div className="card-icons">
            <i className="clock-icon sm-icon overdue-recent completed">
              Aug 4
            </i>
            <i className="description-icon sm-icon"></i>
            <i className="comment-icon sm-icon"></i>
          </div>
        </div>
      </div> 
    )
  })

  return (
    <div id="cards-container" data-id={`list-${listId}-cards`}>
       {cardTiles} 
    </div> 
  )  
}

export default ExistingCard 