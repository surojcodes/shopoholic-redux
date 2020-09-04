import {
  SET_LOADING,
  ADD_ITEM,
  SET_CURRENT,
  RESET_CURRENT,
  UPDATE_ITEM,
  DELETE_ITEM,
  TOGGLE_BOUGHT,
  CLEAR_BOUGHT,
  CLEAR_LIST,
} from './types';

// set loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// add item
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

//set current
export const setCurrent = (item) => {
  return {
    type: SET_CURRENT,
    payload: item,
  };
};
//reset current
export const resetCurrent = (item) => {
  return {
    type: RESET_CURRENT,
  };
};
//update item
export const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    payload: item,
  };
};

//Delete item
export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

//Toggle Bought
export const toggleBought = (id) => {
  return {
    type: TOGGLE_BOUGHT,
    payload: id,
  };
};

// Clear List
export const clearList = () => {
  return {
    type: CLEAR_LIST,
  };
};

// Clear Bought
export const clearBought = () => {
  return {
    type: CLEAR_BOUGHT,
  };
};
