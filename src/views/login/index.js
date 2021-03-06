import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    username: 'manbax',
    count: 0
  }

  render () {
    console.log('render')
    return (
      <div>
        Login
      </div>
    )
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
}

Login.defaultProps = {
  onLogin: function (ctx) {
    console.log(this, ctx)
  }
}

export default Login;
