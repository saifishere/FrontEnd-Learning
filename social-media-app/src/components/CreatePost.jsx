import React, { useContext } from 'react'
import { useRef } from 'react'
import { PostList } from '../store/post-list-store'
const CreatePost = () => {

  const { addPost } = useContext(PostList)

  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userIdVal = userId.current.value;
    const postTitleVal = postTitle.current.value;
    const postBodyVal = postBody.current.value;
    const reactionsVal = reactions.current.value;
    const tagsVal = tags.current.value.split(" ");
   
    

    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";

    addPost(userIdVal, postTitleVal, postBodyVal, reactionsVal, tagsVal);

  }

  return (
    <form className='create-post' onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="userId" className="form-label">User Id</label>
            <input type="text" ref={userId}  className="form-control" id="userId" placeholder='Enter user id here' />
        </div>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Post Title</label>
            <input type="text" className="form-control" id="title" placeholder='How are you feeling today...' ref={postTitle} />
        </div>
        <div className="mb-3">
            <label htmlFor="body" className="form-label">Description</label>
            <textarea rows={4} type="text" className="form-control" id="body" placeholder='Tell us more about it' ref={postBody} />
        </div>
        <div className="mb-3">
            <label htmlFor="reactions" className="form-label">React Below</label>
            <input type="text" className="form-control" id="reactions" ref={reactions} />
        </div>
        <div className="mb-3">
            <label htmlFor="tags" className="form-label">Enter Tags</label>
            <input type="text" className="form-control" id="tags" placeholder='Enter tags using spaces' ref={tags} />
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}

export default CreatePost
