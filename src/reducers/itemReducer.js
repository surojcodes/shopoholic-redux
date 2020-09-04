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
} from '../actions/types';

const initialState = {
  items: [],
  current: null,
  loading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    case RESET_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_BOUGHT:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, bought: !item.bought } : item
        ),
      };
    case CLEAR_LIST:
      return {
        ...state,
        items: [],
      };
    case CLEAR_BOUGHT:
      return {
        ...state,
        items: state.items.filter((item) => !item.bought),
      };
    default:
      return state;
  }
};
