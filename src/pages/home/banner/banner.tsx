import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import './banner.scss'
class Banner extends Component {
    static propTypes = {
        banner: PropTypes.array,
        isEnable: PropTypes.bool
    }
    static defaultProps = {
        banner: [1, 2, 3, 4, 5, 6],
        isEnable: true
    }
    state = {
        myTime: 12
    }
    // 挂载
    componentDidMount() { }
    // 销毁
    componentWillUnmount() { }
    componentWillUpdate() { }
    clickHandler(e) {
        console.log(e)
    }
    toURL(){
        Taro.navigateTo({
            url: '/pages/clock/clock?id=234&type=adfasd'
        })
    }
    render() {
        const { banner, isEnable } = this.props
        return (
            <View onClick={this.toURL}>
                {banner.map((item, index) => {
                    const isOdd = index % 2
                    return isOdd ? <View key={index}>{isOdd}</View> : null
                    })}
            </View>
        )
    }

}
export default Banner