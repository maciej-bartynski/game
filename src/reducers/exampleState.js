export default (state = 0, action) => {
  if (typeof action.payload === 'number') return action.payload;
  return state;
};
