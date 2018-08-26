import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    post(name: $name, email: $email, password: $password) {
      id
    }
  }
`

export default class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  render() {
    const {name, email, password} = this.state;
    return (
      <div className="Login">
        <header className="Login-header">
          <h1 className="Login-title">Signup</h1>
        </header>
        <form>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={e => this.setState({name: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange={e => this.setState({email: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="email">Password: </label>
                <input type="password" name="password" onChange={e => this.setState({password: e.target.value})}/>
            </div>
            <Mutation mutation={POST_MUTATION} variables={{ name, email, password }}>
                {addUser => <button type="button" onClick={addUser}>Signup</button>}
            </Mutation>
            <Link to="/login">Login</Link>
        </form>
      </div>
    );
  }

  submit(e) {
      e.preventDefault()
    console.log(e.target.email.value)
  }
}