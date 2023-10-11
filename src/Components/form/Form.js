import { useState } from "react";
import "./form.scss";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  taskAdded,
  hideModal,
  taskChanged,
  modifyTask,
} from "../../actions/actions";

const Form = () => {
  const { tasks, modifyedId } = useSelector((state) => state);

  const selectedTask = tasks.filter((item) => item.id === modifyedId);
  const title = modifyedId ? selectedTask[0].title : "";
  const text = modifyedId ? selectedTask[0].text : "";
  const complited = modifyedId ? selectedTask[0].complited : false;

  const [taskTitle, setTaskTitle] = useState(title);
  const [taskText, setTaskText] = useState(text);
  const [isComplited, setIsComplited] = useState(complited);

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      text: taskText,
      complited: isComplited,
    };

    modifyedId ? dispatch(taskChanged(newTask)) : dispatch(taskAdded(newTask));
    dispatch(hideModal());

    setTaskTitle("");
    setTaskText("");
    setIsComplited(false);
    dispatch(modifyTask(""));
  };

  console.log(tasks);

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="form__title">
        <label htmlFor="name">Назва Завдання</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="напишіть назву завдання"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>

      <div className="form__text">
        <label htmlFor="text">Опис Завдання</label>
        <textarea
          required
          name="text"
          id="text"
          rows="5"
          cols="30"
          placeholder="опишіть ваше завдання"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </div>
      <div className="form__checkbox">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          checked={isComplited}
          onChange={() => setIsComplited(!isComplited)}
        />
        <label for="checkbox">позначте якщо виконане</label>
      </div>

      <button type="submit" className="form__button">
        {!modifyedId ? "Додати завдання" : "Додати зміни"}
      </button>
      <button
        type="submit"
        className="form__button"
        onClick={(e) => dispatch(hideModal(e.target.id))}
      >
        Закрити
      </button>
    </form>
  );
};

export default Form;
