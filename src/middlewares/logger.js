export const logger = (store) => (next) => (action) => {
  console.log(action.type);
  console.log(store.getState());
  const result = next(action);
  console.log(result);
  return result;
};
