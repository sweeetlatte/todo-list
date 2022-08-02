import axios from "axios";

const initialState = {
  items: []
};

const ADD_TODO = "ADD_TODO";
const SET_TODOS = "SET_TODOS";

// action creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text
});

export const setTodos = (items) => ({
  type: SET_TODOS,
  payload: items
});

// fetchTodos k nhận vào tham số nào và trả về 1 action
// action này nhận vào 1 dispatch
export const fetchTodos = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  dispatch(setTodos(res.data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // payload là text
      // vị trí của payload chính là vị trí cuối cùng của mảng items
      return {
        ...state,
        items: [...state.items, {
          id: state.items.length + 1,
          title: action.payload,
          completed: false
        }]
      };
    case SET_TODOS:
      // payload là object[] {userId, id, title, completed}
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
