'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
} = ReactNative;
let PropTypes = require('prop-types');

const DOT_SIZE = 6;
const DOT_SAPCE = 4;

var styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
  },

  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#E0E1E2',
    marginLeft: DOT_SAPCE,
    marginRight: DOT_SAPCE,
  },

  curDot: {
    position: 'absolute',
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#80ACD0',
    margin: DOT_SAPCE,
    bottom: 0,
  },
});

class DefaultViewPageIndicator extends React.Component {
  static propTypes = {
    goToPage: PropTypes.func,
    activePage: PropTypes.number,
    pageCount: PropTypes.number
  }

  constructor() {
    super()
    this.state = {
      viewWidth: 0,
    };
    this.onLayout = this.onLayout.bind(this)
  }

  renderIndicator(page) {
    return (
      <TouchableOpacity style={styles.tab} key={'idc_' + page} onPress={() => this.props.goToPage(page)}>
        <View style={styles.dot} />
      </TouchableOpacity>
    );
  }

  onLayout(event) {
    var viewWidth = event.nativeEvent.layout.width;
    if (!viewWidth || this.state.viewWidth === viewWidth) {
      return;
    }
    this.setState({
      viewWidth: viewWidth,
    });
  }

  render() {
    let pageCount = this.props.pageCount;
    let itemWidth = DOT_SIZE + (DOT_SAPCE * 2);
    let offsetX = itemWidth * (this.props.activePage - this.props.scrollOffset);
    let left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [offsetX, offsetX + itemWidth]
    })

    let indicators = [];
    for (let i = 0; i < pageCount; i++) {
      indicators.push(this.renderIndicator(i))
    }

    return (
      <View
        style={styles.tabs}
        onLayout={this.onLayout}
      >
        {indicators}
        <Animated.View style={[styles.curDot, {left}]} />
      </View>
    );
  }
};

module.exports = DefaultViewPageIndicator;
