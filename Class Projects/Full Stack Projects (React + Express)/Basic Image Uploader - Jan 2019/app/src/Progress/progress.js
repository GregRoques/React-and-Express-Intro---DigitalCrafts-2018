import React, { Component } from 'react'
import progressStyles from './progress.css'

class Progress extends Component {
  state ={}

  render() {
    return (
      <div className={ progressStyles.progressBar }>
        <div
          className={ progressStyles.progress }
          style={{ width: this.props.progress + '%' }}
        />
      </div>
    )
  }
}

export default Progress