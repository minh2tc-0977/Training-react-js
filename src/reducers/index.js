import { ON_CHANGE, ON_SUBMIT } from "../actions";

export function mainReducer(state, action) {
  switch (action.type) {
    case ON_CHANGE:
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, action.param)
      });

    case ON_SUBMIT :
        return Object.assign({}, state, {isSubmit: true});

    default:
      return state;
  }
}
