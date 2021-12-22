import profileReducer, { addPostActionCreator } from "./profileReducer";
 
let state = {
    posts: [
        { id: 1, message: 'Hi, how you doing?', likeCounter: '3' },
        { id: 2, message: 'Whats up?', likeCounter: '3' },
        { id: 3, message: 'Its my first post', likeCounter: '6' },
        { id: 4, message: 'Hey', likeCounter: '9' }
    ]
}

test('length of posts sould be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('render');
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation 
    expect(newState.posts.length).toBe(5);

  });
test('messagemust be render', () => {
    // 1. test data
    let action = addPostActionCreator('render');
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation 
    expect(newState.posts[4].message).toBe('render');

  });


