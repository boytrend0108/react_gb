import { ADD_CHAT, CHATS_UPDATE} from "./actions"

const initialState = {
  chatList: []
};

/**
 * chatItem = { id: string, name: string};
 * chatList = chatItem[];
 * const chatList = [
 *   {
 *    id: 'string = id =  chats.length',
 *    name: 'string'  
 *   }
 * ]
 */

const chatsReduser = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CHAT:
      return {
        ...state,  
        chatList: [
          ...state.chatList,
          {
            id: `id${state.chatList.length}`,
            name: action.payload
          }
        ]
      }

    case CHATS_UPDATE:
      return {
        ...state, 
        chatList: action.payload
      }

    default : // ОБЯЗАТЕЛЬНО!!!
      return state
  }
}

export default chatsReduser;