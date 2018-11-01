class Index extends Component {
    componentWillMount () {
        console.log('isFetching: ', this.isFetching)
        this.$preloadData
            .then(res=>{
                console.log('res: ', res)
                this.isFetching = false
            })
    }
    // 收到页面跳转的参数作为参数，把预加载的内容通过return返回
    componentWillPreload (params) {
        return this.fetchData(params.url)
    }
    fetchData () {
        this.isFetching = true
        ...
    }
}