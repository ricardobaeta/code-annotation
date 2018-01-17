const initialState = [];

export const ADD = 'ca/errors/ADD';
export const REMOVE = 'ca/errors/REMOVE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.error];
    case REMOVE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

export const add = error => {
  console.error(error);
  return {
    type: ADD,
    error,
  };
};

export const remove = index => ({
  type: REMOVE,
  index,
});

export default reducer;
