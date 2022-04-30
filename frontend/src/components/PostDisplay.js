import React from 'react'
import './PostDisplay.css'

const PostDisplay = ({ submitVote, toggleEdit, deletePost, post }) => {
  const { title, description, body, votes } = post
  return (
    <div className="PostDisplay">
      <div>
        <h2>{title}</h2>
        <p>
          <i>{description}</i>
        </p>
        <div>{body}</div>
      </div>

      <div className="PostDisplay-right">
        <div className="PostDisplay-edit-area">
          <i className="fas fa-edit text-primary mx-2" onClick={toggleEdit} />
          <i className="fas fa-times text-danger" onClick={deletePost} />
        </div>
        <div className="PostDisplay-vote">
          <b>{votes} votes:</b>
          <i className="fas fa-thumbs-up text-success mx-2" onClick={e => submitVote('up')} />
          <i className="fas fa-thumbs-down text-danger" onClick={e => submitVote('down')} />
        </div>
      </div>
    </div>
  )
}

export default PostDisplay
