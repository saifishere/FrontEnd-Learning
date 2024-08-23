import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((item) => (item.id !== action.payload.postId))
    }
    else if(action.type === 'ADD_POST'){
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
}

const PostListProvider = ({children}) => {


    const addPost = (userIdVal, postTitleVal, postBodyVal, reactionsVal, tagsVal) => {
        
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitleVal,
                body: postBodyVal,
                reactions: reactionsVal,
                userId: userIdVal,
                tags: tagsVal,
            }
        })
    }

    const deletePost = (postId) => {
       dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        })
    }

    const[postList, dispatchPostList] = useReducer(PostListReducer, DEFAULT_POST_LIST);

    return (
        <PostList.Provider value={{postList, addPost, deletePost}}>
            {children}
        </PostList.Provider>
    );
}

const DEFAULT_POST_LIST = [{
        id: '1',
        title: 'going to mumbai',
        body: 'Hi, friends I am in mumbai enjoying a lot over here',
        reactions: 1,
        userId: 'anonymous',
        tags: ['fun', 'holiday', 'enjoy']
    },
    {
        id: '2',
        title: 'new born baby',
        body: 'really happy that a girl is here at my doorstep',
        reactions: 3,
        userId: 'user_11',
        tags: ['happiness', 'babyshower', 'fatherly']
    },

]

export default PostListProvider;