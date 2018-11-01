import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
export default class Article extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            idaa: '123214'
        }
    }
    componentWillMount = () => {
        this.setState({
            idaa: this.$router.params.type
        })
        console.log(this.$router.params)
    }
    toPath(){
        Taro.navigateTo({
            url: '/pages/clock/clock'
        })
    }
    render() {
        const { idaa } = this.state
        return (
            <View onClick={this.toPath}>
                <Text>{idaa}</Text>
            </View>
        )
    }
}
