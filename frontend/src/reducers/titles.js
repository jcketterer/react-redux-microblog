import { REMOVE_POST, ADD_POST, UPDATE_POST, VOTE, FETCH_TITLES } from '../actions/types'

const voteSort = posts => {
  return posts.sort((a, b) => b.votes - a.votes)
}

const createTitleFromPost = ({ id, title, description, votes }) => {
  return { id, title, description, votes }
}

export default function rootReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TITLES:
      return voteSort([...action.titles])

    case ADD_POST:
      return voteSort([...state, createTitleFromPost(action.post)])

    case REMOVE_POST:
      return state.filter(title => title.id !== action.postId)

    case UPDATE_POST:
      return state.map(title =>
        title.id === action.post.id ? createTitleFromPost(action.post) : title
      )

    case VOTE:
      return voteSort(
        state.map(title =>
          title.id === action.postId ? { ...title, votes: action.votes } : title
        )
      )

    default:
      return state
  }
}
