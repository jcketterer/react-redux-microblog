import React, { useState } from 'react'

const PostForm = ({ post, save, cancel }) => {
  const [formData, setFormData] = useState({
    title: post.title,
    description: post.description,
    body: post.body,
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(data => ({
      ...data,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    save(formData)
  }

  return (
    <form className="NewPostForm mb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="editform-title">Title:</label>
        <input
          onChange={handleChange}
          id="editform-title"
          name="title"
          className="form-control"
          value={formData.title}
        />
      </div>

      <div className="form-group">
        <label htmlFor="editform-description">Description:</label>
        <input
          onChange={handleChange}
          id="editform-description"
          name="description"
          className="form-control"
          value={formData.description}
        />
      </div>

      <div className="form-group">
        <label htmlFor="editform-body">Body:</label>
        <input
          onChange={handleChange}
          id="editform-body"
          name="body"
          className="form-control"
          value={formData.body}
        />
      </div>

      <button className="btn btn-primary mr-2">Save</button>
      <button onClick={cancel} className="btn btn-secondary">
        Cancel
      </button>
    </form>
  )
}

PostForm.defaultProps = {
  post: { title: '', description: '', body: '' },
}

export default PostForm
