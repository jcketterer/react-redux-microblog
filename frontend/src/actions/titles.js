import { FETCH_TITLES } from './types'

export const getTitles = titles => {
  return {
    type: FETCH_TITLES,
    titles,
  }
}
