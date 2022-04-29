// import axios from 'axios'
import axios from 'axios'
import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  VOTE,
  FETCH_POST,
} from './types'

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/posts'

export function getPostsAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`${API}/${id}`)
    return dispatch(getPost(res.data))
  }
}

const getPost = post => {
  return {
    type: FETCH_POST,
    post,
  }
}

export function sendPostAPI(title, description, body) {
  return async function (dispatch) {
    const res = await axios.post(`${API}`, {
      title,
      description,
      body,
    })
    return dispatch(addPost(res.data))
  }
}

const addPost = post => {
  return {
    type: ADD_POST,
    post,
  }
}

export function removePostAPI(id) {
  return async function (dispatch) {
    await axios.delete(`${API}/${id}`)
    return dispatch(removePost(id))
  }
}

const removePost = postId => {
  return {
    type: REMOVE_POST,
    postId,
  }
}

export function updatePostAPI(id, title, description, body) {
  return async function (dispatch) {
    const res = await axios.put(`${API}/${id}`, {
      title,
      description,
      body,
    })
    return dispatch(updatePost(res.data))
  }
}

const updatePost = post => {
  return {
    type: UPDATE_POST,
    post,
  }
}

export function sendVoteAPI(id, direction) {
  return async function (dispatch) {
    const res = await axios.post(`${API}/${id}/vote/${direction}`)
    return dispatch(vote(id, res.data.votes))
  }
}

const vote = (postId, votes) => {
  return {
    type: VOTE,
    postId: postId,
    votes: votes,
  }
}

export function removeCommentAPI(postId, commentId) {
  return async function (dispatch) {
    await axios.delete(`${API}/${postId}/comments/${commentId}`)
    return dispatch(removeComment(postId, commentId))
  }
}

const removeComment = (postId, commentId) => {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  }
}

export function sendCommentAPI(postId, text) {
  return async function (dispatch) {
    const res = await axios.post(`${API}/${postId}/comments`, { text })
    return dispatch(addComment(postId, res.data))
  }
}

const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    postId,
    comment,
  }
}
