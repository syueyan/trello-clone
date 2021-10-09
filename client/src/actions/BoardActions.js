import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function getBoardRequest() {
  return { type: types.GET_BOARD_REQUEST };
}

export function getBoardSuccess(board) {
  return { type: types.GET_BOARD_SUCCESS, board }
}

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board: board };
}

export function fetchBoards() {
  return function (dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards(data => dispatch(fetchBoardsSuccess(data.boards)));
  };
}

export function getBoard(id) {
  return async function (dispatch) {
    await dispatch(getBoardRequest());
    await apiClient.getBoard(id, board => {
      dispatch(getBoardSuccess(board.board))});
  }
}

export function createBoard(board, callback) {
  return function (dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, data => {
      dispatch(createBoardSuccess(data.board));

      if (callback) {
        callback(data.board);
      }
    });
  };
}
