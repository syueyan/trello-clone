import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../actions/ListActions'
import ExistingCards from "./ExistingCards";

const ExistingLists = ({ boardId }) => {
  const dispatch = useDispatch()
  const lists = useSelector((state) => state.lists);
  const boardLists = lists.filter((list) => list.boardId === boardId);

  const [newListForm, setNewListForm] = useState(false);
  const [newListTitle, setNewListTitle] = useState()

  const newListFormStatus = newListForm ? "new-list selected" : "new-list";
  const toggleNewListForm = () => setNewListForm(!newListForm);

  const submitNewList = async () => {
    const newList = {
      boardId,
      list: {
        title: newListTitle
      }
    }
    await dispatch(actions.createList(newList))
    toggleNewListForm()
  };

  const listTiles = boardLists.map((list) => {
    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              <p className="list-title">{list.title}</p>
            </div>
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
  });

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {listTiles}
      </div>
      <div id="new-list" className={newListFormStatus}>
        <span onClick={toggleNewListForm}>Add a list...</span>
        <input 
          type="text" 
          value={newListTitle} 
          onChange={(e) => setNewListTitle(e.target.value)} 
        />
        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onClick={submitNewList}
          />
          <i class="x-icon icon" onClick={toggleNewListForm}></i>
        </div>
      </div>
    </div>
  );
};

export default ExistingLists;
