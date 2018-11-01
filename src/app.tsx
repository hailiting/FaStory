import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import Index from './pages/index'

import './app.scss'

class App extends Component {
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/clock/clock',
      'pages/article/article'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '发哥讲事情',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/home/index',
        text: '首页'
        // iconPath: './images/tab/xxx'
        // selectedIconPath: './images/tab/xxx'
      },{
        pagePath: 'pages/article/article',
        text: '文章页'
        // iconPath: './images/tab/xxx'
        // selectedIconPath: './images/tab/xxx'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
