import axios from "axios";

const initialState = {
  items: []
};

const ADD_TODO = "ADD_TODO";
const SET_TODOS = "SET_TODOS";
const CHECKED = "CHECKED";

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

export const checkTodo = (index) => ({
  type: CHECKED,
  payload: index
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // payload là text
      // vị trí của payload chính là vị trí cuối cùng của mảng items
      if (state.items && state.items.length > 0)
        return {
          ...state,
          items: [...state.items, {
            id: state.items.length + 1,
            title: action.payload,
            completed: false
          }]

        }
      else return {
        ...state,
        items: [{
          id: 1,
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
    case CHECKED:
      state.items[action.payload].completed = true;
      return {
        ...state,
        items: state.items.map(item => item)
      }
    default:
      return state;
  }
};

export default reducer;
