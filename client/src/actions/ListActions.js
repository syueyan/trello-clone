import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListSuccess(list) {
  return { type: types.LIST_CREATED, list: list };
}

export function editListSuccess(list) {
  return { type: types.LIST_EDIT, list: list }
}

export function createList(list, callback) {
  return function (dispatch) {
    apiClient.createList(list, list => {
      dispatch(createListSuccess(list));

      if (callback) {
        callback(data.list);
      }
    });
  };
}

export function editList(list, callback) {
  return function (dispatch) {
    apiClient.editList(list, list => {
      dispatch(editListSuccess(list))
    })

    if (callback) {
      callback(list)
    } 
  }
}