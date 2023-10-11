import "./App.scss";

import { useDispatch, useSelector } from "react-redux";
import TasksList from "../tasksList/TasksList";
import { showModal, taskFiltered } from "../../actions/actions";
import Form from "../form/Form";

function App() {
  const { isModalVisible } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <main className="app">
      <div className="content">
        <div className="left_section">
          {!isModalVisible && (
            <button
              className="top__button top__newTaskButton"
              onClick={() => dispatch(showModal())}
            >
              Створити нове завдання
            </button>
          )}
          {!isModalVisible && <TasksList />}
        </div>
        {!isModalVisible && (
          <div className="  top__buttons">
            <button
              className="top__button"
              onClick={() => dispatch(taskFiltered("all"))}
            >
              Показати усі
            </button>
            <button
              className="top__button"
              onClick={() => dispatch(taskFiltered("complited"))}
            >
              Показати Виконані
            </button>
            <button
              className="top__button"
              onClick={() => dispatch(taskFiltered("notComplited"))}
            >
              Показати НЕ виконані
            </button>
          </div>
        )}
      </div>
      {isModalVisible && <Form />}
    </main>
  );
}

export default App;
