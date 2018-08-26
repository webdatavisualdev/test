import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const LOGIN_QUERY = gql`
  {
    users {
      user {
        id
        name
        email
        password
      }
    }
  }
`

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <h1 className="Login-title">Login</h1>
        </header>
        <Query query={LOGIN_QUERY}>
        {({loading, error, data}) => {
            console.log(error, data)
            return null
        }}
        </Query>
        <form onSubmit={(e) => this.submit(e)}>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email"/>
            </div>
            <div>
                <label htmlFor="email">Password: </label>
                <input type="password" name="password"/>
            </div>
            <button type="submit">Login</button>
            <Link to="/signup">Signup</Link>
        </form>
      </div>
    );
  }

  submit(e) {
      e.preventDefault()
    console.log(e.target.email.value)
  }
}