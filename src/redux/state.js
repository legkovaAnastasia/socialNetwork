  let state = {
    profilePage: {
        posts: [
        { id: 1, message: 'Hi, how you doing?', likeCounter: '3' },
        { id: 2, message: 'Whats up?', likeCounter: '3' },
        { id: 3, message: 'Its my first post', likeCounter: '6' },
        { id: 4, message: 'Hey', likeCounter: '9' }
        ]
    },

    dialoguesPage: {
        dialogues: [
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Ksenya'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Volodya'},
            {id: 5, name: 'Rex'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Kek'},
            {id: 4, message: 'How you doing?'},
            {id: 5, message: 'Lol'}
        ]
    }
  };

 export let addPost = (postMessage) => {
      let newPost = {
          id: 5,
          message: postMessage,
          likeCounter: 0
      };

      state.profilePage.posts.push();
  }

  export default state;