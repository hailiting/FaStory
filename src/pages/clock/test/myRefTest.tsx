import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';
// 父
class FaCat extends Component {
    roar() {
        this.cat.miao()
    }
    // `this.cat` 会变成 `Cat` 组件实例的引用
    refCat = (node) => this.cat = node
    render() {
        return <Cat ref={this.refCat} />
    }
}
// 子
class Cat extends Component {
    miao() {
        console.log('miao miao miao ~')
    }
    render() {
        return <View>sdfgfdsgdf</View>
    }
}
default export FaCat