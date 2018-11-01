1, 动态添加style
~~~
<View style={{backgroundImage: `url(${bgImg})`}}></View>
~~~
2，动态添加class
~~~
1.<View className={data.length>0?’class-yes’: ’class-no'}></View>

2.<View className={`common ${data.length>0?’class-yes’: ’class-no}`}></View>
~~~