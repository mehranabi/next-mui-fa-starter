import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    bottom: 0,
    top: 0,
    position: 'absolute',
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
})

function FullLoading(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.loading} size={50} />
    </div>
  )
}

FullLoading.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FullLoading)
