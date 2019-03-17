import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Loading from '../components/FullLoading'
import Router from 'next/router'
import AuthService from '../services/authService'

export default function withAuth(AuthComponent) {
  const Auth = new AuthService()

  return class Authenticated extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true,
      }
    }

    componentDidMount() {
      if (Auth.isLoggedIn()) {
        this.setState({
          isLoading: false,
        })
      } else {
        Router.push('/auth/login')
      }
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <AuthComponent {...this.props} />
          )}
        </div>
      )
    }
  }
}
