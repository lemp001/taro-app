import { Component, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux';
import styles from './index.scss'
import { Action } from 'redux';

interface Props {
  dispatch: (obj: any) => Action
}

const Home: React.FC<Props> = (props) => {
  console.log('this.props', props);

  useEffect(() => {
    props.dispatch({
      type: 'home/save',
      payload: {keai: 'dva啊'}
    })
  }, [])

  return (
    <View className={styles.home}>
      <Text>Hello world!</Text>
      <View className={styles.textHide}>这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据这里是多行数据</View>
    </View>
  )
}

export default connect((state) => state)(Home);
