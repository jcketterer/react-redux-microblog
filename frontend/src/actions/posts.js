// import axios from 'axios'
import { ADD_POST, REMOVE_POST, UPDATE_POST, ADD_COMMENT, REMOVE_COMMENT, VOTE } from './types'

export const addPost = post => {
  return {
    type: ADD_POST,
    post,
  }
}

const removePost = postId => {
  return {
    type: REMOVE_POST,
    postId,
  }
}

const updatePost = post => {
  return {
    type: UPDATE_POST,
    post,
  }
}

export const vote = (postId, votes) => {
  return {
    type: VOTE,
    postId: postId,
    votes: votes,
  }
}

const removeComment = (postId, commentId) => {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  }
}

const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    postId,
    comment,
  }
}
