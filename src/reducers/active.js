import { RECIEVE_ACTIVE } from "../actions/active";

const active = (state = "Latest", action) => {
  switch (action.type) {
    case RECIEVE_ACTIVE:
      return action.activeTab;
    default:
      return state;
  }
};
export default active;
