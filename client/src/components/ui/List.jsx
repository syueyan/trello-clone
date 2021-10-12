import React, { useState } from "react";
import ExistingCards from "./ExistingCards";
import { useDispatch } from "react-redux";
import * as actions from "../../actions/ListActions"

const List = ({ list }) => {
  const [editTitleMode, setEditTitleMode] = useState(false)
  const [title, setTitle] = useState(list.title)

  const dispatch = useDispatch()

  const submitNewTitle = () => {
    dispatch(actions.editList({_id: list._id, title: title}))
  }

  const titleDisplay = () => {
    if (editTitleMode) return (
      <p className="list-title">{list.title}</p>
    )
    else return (
      <input
        className="list-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={submitNewTitle}
      ></input>
    );
  }

  return (
    <div className="list-wrapper">
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
          <div className="add-dropdown add-bottom">
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List