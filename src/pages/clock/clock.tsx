import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import MyInput from './test/input'
import MyFnRefText from './test/myRefTest'
class Clock extends Component{
    constructor(props){
        super(props)
        this.state = { date: new Date() }
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    compentWillUnmount () {
        clearInterval(this.timerID)
    }
    tick () {
        this.setState({
            date: new Date()
        })
    }
    render(){
        return (
            <View>
                <Text>Hello world!</Text>
                <Text>现在是：{this.state.date.toLocaleTimeString()}</Text>
                <MyInput />
                <MyFnRefText />
            </View>
        )
    }
}
export default Clock