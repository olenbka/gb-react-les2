import { CREATE_CHAT, REMOVE_CHAT, SET_CHATS }  from "./actions";
import { CHATS } from '../../mocks/chats';

const initialState = {
    chats: CHATS,
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CHAT: {
            return {
                chats: [
                    ...state.chats,
                    action.payload,
                ]
            }
        }

        case SET_CHATS: {
            return {
                chats: [...action.payload]
            }
        }

        case REMOVE_CHAT: {
            return {
                chats: state.chats.filter((item) => item.id !==action.payload)
            }
        }

        default: {
            return state;
        } 
    }
}
