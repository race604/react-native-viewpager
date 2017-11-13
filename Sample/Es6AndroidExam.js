/**
 * Created by Lazy on 2017/3/9.
 * Android Es6  写法
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    WebView,
    TouchableHighlight,
    ToolbarAndroid,
    ToastAndroid
} from 'react-native';
var ViewPager = require('react-native-viewpager');
var WINDOW_WIDTH = Dimensions.get('window').width;
var IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

var count = 0;

//课程主界面
class Es6AndroidExam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2,})
        };
    };

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithPages(IMGS),
        });
    }


    render() {
        return this.renderHomeCoueseView();
    }

//加载课程界面
    renderHomeCoueseView() {
        return (
            <View style={styles.container}>

                <ToolbarAndroid   //标题栏
                    titleColor='#D6DDEF'  //只支持RGB数值，设置标题的字体颜色
                    style={styles.toolbar}
                    title="主页"></ToolbarAndroid>
                <ViewPager
                    ref={(viewpager) => {
                        this.viewpager = viewpager
                    }}
                    style={styles.thumbnail}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    onChangePage={this.pageChange}
                    isLoop={true}
                    autoPlay={true}/>
            </View>
        );
    }

//viewpage滑动的时候监听
    pageChange() {
        // ToastAndroid.show("1", ToastAndroid.SHORT)
    }


//显示渲染返回的数据 results上面定义的图片集合
    _renderPage(results) {
        return (
            <Image
                source={{uri: results}}
                style={styles.thumbnail}/>
        );
    }
}


const
    styles = StyleSheet.create({
        container: {
            flex: 1,  //总共评分布局为1份
        },
        thumbnail: {
            width: WINDOW_WIDTH,  //宽度设置为屏幕的宽度
            height: 150,
        },

        toolbar: {
            backgroundColor: '#efefef',
            height: 56,

        },
    });

//暴漏给其他模块调用
module
    .exports = Es6AndroidExam;