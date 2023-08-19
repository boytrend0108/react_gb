import { TOGGLE_NAME, TOGGLE_CHECKBOX, UPDATE_NAME} from "./actions";

const initialState = {
  name: "Vit",
  showName: true,
  checkBoxValue: true,
};

const profileReduser = (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_NAME:
      return {
        ...state,
        showName: !state.showName,
      };

    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checkBoxValue: !state.checkBoxValue,
      };

    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }

    default: // обязательный параметр
      return state;
  }

};

export default profileReduser