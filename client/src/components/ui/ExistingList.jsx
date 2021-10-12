import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../actions/ListActions'
import List from './List'

const ExistingLists = ({ boardId }) => {
  const dispatch = useDispatch()
  const lists = useSelector((state) => state.lists);
  const boardLists = lists.filter((list) => list.boardId === boardId);

  const [newListForm, setNewListForm] = useState(false);
  const [newListTitle, setNewListTitle] = useState('')

  const newListFormStatus = newListForm ? "new-list selected" : "new-list";
  const toggleNewListForm = () => setNewListForm(!newListForm);

  const submitNewList = () => {
    const newList = {
      boardId,
      list: {
        title: newListTitle
      }
    }
    dispatch(actions.createList(newList))
    toggleNewListForm()
    setNewListTitle("")
  };

  const listTiles = boardLists.map((list) => {
    return (
      <List key={list._id} list={list} />
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
          <i className="x-icon icon" onClick={toggleNewListForm}></i>
        </div>
      </div>
    </div>
  );
};

export default ExistingLists;
