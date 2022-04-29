import React, { useState, useEffect } from 'react'
import './TitleList.css'
import { fetchTitlesAPI } from '../actions/titles'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { sendVoteAPI } from '../actions/posts'

const TitleList = () => {
  const titles = useSelector(state => state.titles)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    function () {
      async function fetchTitle() {
        await dispatch(fetchTitlesAPI())
        setIsLoading(false)
      }

      if (isLoading) {
        fetchTitle()
      }
    },
    [dispatch, isLoading]
  )

  const vote = (direction, id) => {
    dispatch(sendVoteAPI(id, direction))
  }

  if (isLoading) return <b>Loading</b>

  if (!isLoading && titles.length === 0) {
    return <b>Please Add A Post!</b>
  }

  return (
    <div className="row">
      {titles.map(title => (
        <div key={title.id} className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <Link to={'/' + title.id}>{title.title}</Link>
              </div>
              <div>
                <i>{title.description}</i>
              </div>
            </div>
            <div className="card-footer">
              <small>{title.votes} votes</small>
              <i
                className="fas fa-thumbs-up text-success mx-2"
                onClick={e => vote('up', title.id)}
              />
              <i
                className="fas fa-thumbs-down text-danger"
                onClick={e => vote('down', title.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TitleList
