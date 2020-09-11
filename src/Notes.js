import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Notes extends React.Component{
  render() {
    return(
      <div>
      <h1>this is the notes</h1>
      <NavLink to="/">
            Go back
          </NavLink>
      </div>
    )
  }
}

export default Notes;