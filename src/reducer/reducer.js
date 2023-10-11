const initialState = {
  tasks: [],
  isModalVisible: false,
  modifyedId: "",
  filter: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASK_ADD":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "TASK_DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };

    case "SHOW_MODAL":
      return {
        ...state,
        isModalVisible: true,
      };
    case "HIDE_MODAL":
      return {
        ...state,
        isModalVisible: false,
      };
    case "MODIFY_TASK":
      return {
        ...state,
        modifyedId: action.payload,
      };
    case "TASK_CHANGED":
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((item) => item.id !== state.modifyedId),
          action.payload,
        ],
      };
    case "TASK_FILTERED":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
