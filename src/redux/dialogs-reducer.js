const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Roman' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Fedya' },
        { id: 4, name: 'Olga' }
    ],
    messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Fine, and you?' },
        { id: 4, message: 'Good, tnx' }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;

            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ''
            state.messagesData.push({ id: 6, message: body });

            return state;

        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: 'SEND-MESSAGE'
    }
}


export const updateNewMessageBodyCreator = (body) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY', body: body
    }
}

export default dialogsReducer;