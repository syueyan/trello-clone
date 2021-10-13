import React, { useState } from "react";
import ExistingCards from "./ExistingCards";
import { useDispatch } from "react-redux";
import { editList } from "../../actions/ListActions"

const List = ({ list }) => {
  const [editTitleMode, setEditTitleMode] = useState(false)
  const [listTitle, setListTitle] = useState(list.title)
  const [showAddCardForm, setAddCardForm] = useState(false)
  // const [cardTitle, setCardTitle] = useState(true)

  const dispatch = useDispatch()

  const submitNewTitle = () => {
    dispatch(editList({_id: list._id, title: title}))
    setEditTitleMode(false)
  }

  // const submitNewCard = () => {
  //   dispatch(addNewCard({ listId: list._id, card: { title: } }))
  // }

  const titleDisplay = () => {
    if (editTitleMode) return (
      <p className="list-title">{list.title}</p>
    )
    else return (
      <input
        className="list-title"
        value={listTitle}
        onChange={(e) => setListTitle(e.target.value)}
        onBlur={submitNewTitle}
      ></input>
    );
  }

  const toggleAddCardForm = (showHideFlag) => {
    return () => setAddCardForm(showHideFlag)
  }
  const hideAddCardBtn = showAddCardForm ? " add-dropdown-active" : ""
  const displayCardForm = showAddCardForm ? " active-card" : "" 

  return (
    <div className={`list-wrapper${hideAddCardBtn}`}>
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>{titleDisplay()}</div>
          <ExistingCards listId={list._id} />
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div className={`add-dropdown add-bottom${displayCardForm}`}>
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon" onClick={toggleAddCardForm(false)}></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div 
            className="add-card-toggle" 
            data-position="bottom" 
            onClick={toggleAddCardForm(true)} 
          >
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List