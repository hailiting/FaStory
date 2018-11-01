import Taro, { Component } from '@tarojs/taro'
import { Input } from '@tarojs/components';
class MyComponent extends Component {
    componentDidMount() {
        if (process.env.TARO_ENV === 'WEAPP') {
            console.log(this.refs.input)
        } else if (process.env.TARO_ENV === 'h5') {
            // context
            // onBlur()=>{} 
            // onFocus()=>{} 
            // onInput()=>{} 
            // prevContext()=>{} 
            // prevProps
            console.log(this.refs.input)
        }
    }
    onInput(val) {
        console.log(val.detail.value)
    }
    render() {
        return <Input ref='input' placeholder='sfsdfdsf' onInput={this.onInput.bind(this)} />
    }
}
export default MyComponent