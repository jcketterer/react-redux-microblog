//DONT FORGET USE EFFECT WHEN IMPLEMENTING THE API
import React, { useState, useEffect } from 'react'
import './Post.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import PostForm from './PostForm'
import PostDisplay from './PostDisplay'
import {
  getPostsAPI,
  updatePostAPI,
  sendVoteAPI,
  // sendCommentAPI,
  // removeCommentAPI,
  removePostAPI,
} from '../actions/posts'

const Post = props => {
  const [isEditing, setIsEditing] = useState(false)
  const postId = Number(useParams().postId)
  const history = useHistory()
  const post = useSelector(state => state.posts[postId])
  const dispatch = useDispatch()

  useEffect(
    function loadPostWhenPostOrIdChanges() {
      async function getPost() {
        dispatch(getPostsAPI(postId))
      }
      if (!post) {
        getPost()
      }
    },
    [dispatch, postId, post]
  )

  const toggleEdit = () => {
    setIsEditing(edit => !edit)
  }

  const edit = ({ title, description, body }) => {
    dispatch(updatePostAPI(postId, title, description, body))

    toggleEdit()
  }

  const deletePost = () => {
    dispatch(removePostAPI(postId))
    history.push('/')
  }

  const vote = direction => {
    dispatch(sendVoteAPI(postId, direction))
  }

  // const addComment = text => {
  //   dispatch(sendCommentAPI(postId, text))
  // }

  // const deleteComment = commentId => {
  //   dispatch(removeCommentAPI(postId, commentId))
  // }

  if (!post) return <p>Loading...</p>

  return (
    <div className="Post">
      {isEditing ? (
        <PostForm post={post} save={edit} cancel={toggleEdit} />
      ) : (
        <PostDisplay
          post={post}
          toggleEdit={toggleEdit}
          deletePost={deletePost}
          submitVote={vote}
        />
      )}
    </div>
  )
}

export default Post
