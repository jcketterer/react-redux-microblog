import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from '../actions/types'

export default function rootReducer(state = {}, action) {
  let p = state[action.postId]

  switch (action.type) {
    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } }

    case UPDATE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: state[action.post.id].comments,
        },
      }

    case REMOVE_POST:
      let posts = { ...state }
      delete posts[action.postId]
      return posts

    case VOTE:
      return {
        ...state,
        [action.postId]: { ...p, votes: action.vote },
      }

    case ADD_COMMENT:
      return {
        ...state,
        [action.postId]: { ...p, comments: [...p.comments, action.comment] },
      }

    case REMOVE_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...p,
          comments: p.comments.filter(comment => comment.id === action.commentId),
        },
      }

    default:
      return state
  }
}
