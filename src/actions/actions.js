export const taskAdded = (task) => {
  return {
    type: "TASK_ADD",
    payload: task,
  };
};

export const taskDeleted = (id) => {
  return {
    type: "TASK_DELETE",
    payload: id,
  };
};

export const showModal = () => {
  return {
    type: "SHOW_MODAL",
  };
};

export const hideModal = () => {
  return {
    type: "HIDE_MODAL",
  };
};

export const modifyTask = (id) => {
  return {
    type: "MODIFY_TASK",
    payload: id,
  };
};

export const taskChanged = (task) => {
  return {
    type: "TASK_CHANGED",
    payload: task,
  };
};

export const taskFiltered = (filter) => {
  return {
    type: "TASK_FILTERED",
    payload: filter,
  };
};
