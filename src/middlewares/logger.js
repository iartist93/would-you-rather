export const logger = (store) => (next) => (action) => {
  const result = next(action);
  console.log(result);
  console.log(action.type);
  console.log(store.getState());
  return result;
};
