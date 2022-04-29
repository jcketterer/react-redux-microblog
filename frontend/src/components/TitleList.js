import React, { useState, useEffect } from 'react'
import './TitleList.css'
import { getTitles } from '../actions/titles'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const TitleList = () => {
  const titles = useSelector(state => state.title)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)

  const vote = (direction, id) => {
    dispatch(vote(id, direction))
  }

  // if (isLoading) return <b>Loading</b>

  // if (!isLoading && titles.length === 0) {
  //   return <b>Please Add A Post!</b>
  // }

  return (
    <div className="row">
      {titles.map(title => (
        <div key={title.id} className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <Link to={'/' + title.id}>{title.title}</Link>
              </div>
              <div className="card-text">
                <i>{title.description}</i>
              </div>
              <div className="card-footer">
                <small>{title.votes} votes</small>
                <i
                  className="fas fa-thumbs-up text-success ml-2"
                  onClick={e => vote('up', title.id)}
                />
                <i
                  className="fas fa-thumbs-up text-danger ml-2"
                  onClick={e => vote('down', title.id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TitleList
