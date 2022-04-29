import { FETCH_TITLES } from './types'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/posts'

export function fetchTitlesAPI() {
  return async function (dispatch) {
    const res = await axios.get(`${API}`)
    return dispatch(getTitles(res.data))
  }
}

export const getTitles = titles => {
  return {
    type: FETCH_TITLES,
    titles,
  }
}
