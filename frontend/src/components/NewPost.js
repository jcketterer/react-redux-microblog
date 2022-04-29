import React from 'react'
import './NewPost.css'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { sendPostAPI } from '../actions/posts'
import PostForm from './PostForm'

const NewPost = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const add = ({ title, description, body }) => {
    dispatch(sendPostAPI(title, description, body))
    history.push('/')
  }

  const cancel = () => {
    history.push('/')
  }

  return (
    <main>
      <h1>New Post</h1>
      <PostForm save={add} cancel={cancel} />
    </main>
  )
}

export default NewPost
