import {rerenderEntireTree} from '../render';

const state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesCount: '11'},
            {id: 2, post: "It's my first post", likesCount: '4'}
        ], 
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Very well'},
            {id: 4, message: 'Very well'}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'}
        ]
    }
};

export const addPost = () => {
    const newPost = {
        id: 3,
        post: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};



export {state};