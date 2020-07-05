import React from 'react';
import Login from './views/login/index'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  render () {
    console.log('render')
    return (
      <div>
        hello
        <button onClick={() => {
          this.setState({
            count: this.state.count++
          })
        }}>onClick</button>
        <Login />
      </div>
    )
  }

  // componentWillMount () {
  //   console.log('componentWillMount')
  // }

  // componentDidMount () {
  //   console.log('componentDidMount')
  // }

  // componentDidUpdate () {
  //   console.log('componentDidUpdate')
  // }

  // componentWillReceiveProps () {
  //   console.log('componentWillReceiveProps')
  // }

  // shouldComponentUpdate () {
  //   console.log('shouldComponentUpdate')
  // }

  // UNSAFE_componentWillMount () {
  //   console.log('UNSAFE_componentWillMount')
  // }
}