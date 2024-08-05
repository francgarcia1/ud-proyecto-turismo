export const reducer = (state, action) => {
  switch (action.type) {
    case "action1":
      return {
        ...state,
        selectedAction: action.payload,
      };
    case "action2":
      return {
        ...state,
        selectedAction2: action.payload,
      };
    default:
      return state;
  }
};
