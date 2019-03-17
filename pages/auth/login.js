import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({})

class Login extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <Typography>ورود به حساب کاربری</Typography>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)
