import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import './App.css'
import NewPost from './NewPost'
import Home from './Home'
import Post from './Post'

function App() {
  return (
    <div className="App container">
      <header className="App-header jumbotron mt-2">
        <h1 className="App-title display-4">MicroBlog</h1>
        <p className="lead">Get in the Rithm of blogging</p>
        <nav>
          <NavLink exact to="/">
            Blog
          </NavLink>
          <NavLink exact to="/new">
            Add A Post!
          </NavLink>
        </nav>
      </header>
      <Switch>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:postId">
          <Post />
        </Route>
      </Switch>
    </div>
  )
}

export default App
