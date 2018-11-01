import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Banner from './banner/banner'
export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页000'
  }
  render() {
    const body = <View>Hello myBody</View>
    return (
      <View>
        <Text>Hello world!</Text>
        <Banner />
        {body}
      </View>
    )
  }
}

