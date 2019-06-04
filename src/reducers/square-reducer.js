import { CHANGE_COLOR } from "../actions/square-actions";

const initialState = {
      color: "green"
};

export default function squareReducer(state = initialState, action={}){
  switch (action.type) {
    case CHANGE_COLOR: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
