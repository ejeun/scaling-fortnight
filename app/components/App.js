'use strict'

import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'

export default const App = (props) => (
  <div>
    <Navbar />
    <div>
      { props.children && React.cloneElement(props.children, props) }
    </div>
  </div>
)
