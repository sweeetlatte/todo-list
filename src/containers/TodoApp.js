// Kết nối todoReducer (quản lý state) với UI TodoApp
import { connect } from "react-redux";

import TodoApp from "../components/TodoApp";
import { addTodo, setTodos, fetchTodos } from "../redux/todo";

// tham số 1: cho biết component đc render dựa trên
// nhánh nào của store
// ở đây là nhánh todo
// tham số này nhận vào state của store redux và return về
// 1 object với key là props mà ta muốn truyền vào UI component
const mapStateToProps = (state) => {
  return {
    todos: state.todo.items
  };
};

// tham số 2: khi muốn dispatch action sang redux store
// thì phải bind thêm các action muốn truyền vào
// là 1 object
// const mapDispatchToProps = {
//   // addTodo: addTodo // khi người dùng muốn thực hiện
//   // action addTodo thì action này sẽ được dispatch
//   // do 2 vế này trùng tên nhau nên có thể viết ngắn gọn là
//   addTodo,
//   setTodos
// };

// thay vì gắn tham số thứ 2 với 1 object thì
// gắn với 1 function nhận vào dispatch là method của store
// và trả về object
// object có key và value,
// key là props của component mà ta connect
// value là logic sẽ đc thực hiện khi dispatch key đó
const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  setTodos: (items) => dispatch(setTodos(items)),
  fetchTodos: () => dispatch(fetchTodos())
});

// hàm connect nhận vào 2 tham số và trả về 1 function
// wrap TodoApp lại
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
