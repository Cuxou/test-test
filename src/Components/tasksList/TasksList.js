import { useDispatch, useSelector } from "react-redux";
import { taskDeleted, showModal, modifyTask } from "../../actions/actions";
import TaskItem from "../taskItem/TaskItem";
import "./tasksList.scss";

const TasksList = () => {
  const { tasks, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(taskDeleted(id));
  };

  const renderTasks = (arr) => {
    if (arr.length === 0) {
      return (
        <>
          <h5 className="no_tasks">Завдань поки що немає</h5>
        </>
      );
    }

    const clickHandler = (id) => {
      dispatch(showModal());
      dispatch(modifyTask(id));
    };

    return arr
      .filter((item) => {
        if (filter === "complited") {
          return item.complited;
        } else if (filter === "notComplited") {
          return !item.complited;
        } else return item;
      })
      .map(({ id, ...props }) => {
        return (
          <div className="task_item">
            <TaskItem key={id} {...props} onDelete={() => onDelete(id)} />
            <button
              className="task_item_change_button"
              onClick={() => clickHandler(id)}
            >
              Внести зміни в завдання
            </button>
          </div>
        );
      });
  };

  const elements = renderTasks(tasks);
  return <>{elements}</>;
};

export default TasksList;
