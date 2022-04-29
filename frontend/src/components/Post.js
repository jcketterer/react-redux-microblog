//DONT FORGET USE EFFECT WHEN IMPLEMENTING THE API
import React, { useState } from 'react'
import './Post.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import PostForm from './PostForm'
import PostDisplay from './PostDisplay'

const Post = props => {
  const [editing, setEditing] = useState(false)
  const postId = Number(useParams().postId)
  const history = useHistory()
  const post = useSelector(state => state.posts[postId])
  const dispatch = useDispatch()

  const toggleEdit = () => {
    setEditing(edit => !edit)
  }

  return (
    <div className="Post">
      {editing ? (
        <PostForm post={post} cancel={toggleEdit} /> //save={edit}
      ) : (
        <PostDisplay post={post} toggleEdit={toggleEdit} />
      )}
      {/* deletePost={deletePost}
                    submitVote={submitVote} */}
    </div>
  )
}

export default Post
