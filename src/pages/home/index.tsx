import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.scss'

export default class Home extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log('process.env.TARO_ENV', process.env.TARO_ENV)
    return (
      <View className={styles.home}>
        <Text>Hello world!</Text>
        <View className={styles.textHide}>这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据</View>
      </View>
    )
  }
}
