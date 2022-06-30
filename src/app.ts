import Taro from '@tarojs/taro';
import { Component } from 'react'
import './app.scss'

class App extends Component {

  onLaunch(options) {
    console.log('options', options);
    console.log('Taro.getEnv()', Taro.getEnv());
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
