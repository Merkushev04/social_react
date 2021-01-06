import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";



// let store = {
//     _state: {
//         profilePage: {
//             postsData:[
//                 { id: 1, message: 'Hi, how are you?', like: '15' },
//                 { id: 2, message: "It's my firs post", like: '20' }
//             ],
            
    
//             newPostText: 'testovaya zapis',
    
//         },
//         messagesPage: {
//             dialogsData: [
//                 { id: 1, name: 'Roman' },
//                 { id: 2, name: 'Misha' },
//                 { id: 3, name: 'Fedya' },
//                 { id: 4, name: 'Olga' }
//             ],
//             messagesData: [
//                 { id: 1, message: 'Hello' },
//                 { id: 2, message: 'How are you?' },
//                 { id: 3, message: 'Fine, and you?' },
//                 { id: 4, message: 'Good, tnx' }
//             ],
//         },
//             newMessageBody: "",

//         sidebar: {}
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe (observer) {
//         this._callSubscriber = observer; // наблюдатель уведомляется когда что то
//     },
//     _callSubscriber() {
//         console.log('state changet')
//     },

//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.messagesPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
//         this._callSubscriber(this._state);
        
//     }
// }






// export default store;
// window.state = store;