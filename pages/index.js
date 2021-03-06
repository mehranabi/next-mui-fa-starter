import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import withAuth from '../src/hoc/withAuth'

const styles = theme => ({})

class Index extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <Typography>پنل شما</Typography>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withAuth(withStyles(styles)(Index))
