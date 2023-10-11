import "./taskItem.scss";
const TaskItem = ({ title, text, complited, onDelete }) => {
  return (
    <>
      <div className="task__item_inner">
        <div className="task_item__title">{title}</div>
        <div className="task_item__text">{text}</div>
        <div className="task__item_isComplite">
          Процес виконання:
          <span>{complited ? " Виконано" : " не виконано"}</span>
        </div>
        <div className="task__delete_button" onClick={(e) => onDelete(e)} />
      </div>
    </>
  );
};

export default TaskItem;
