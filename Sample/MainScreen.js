'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var TopScreen = require('./TopScreen');
var BottomScreen = require('./BottomScreen');

var MainScreen = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <TopScreen style={styles.viewpager}/>
        <BottomScreen style={styles.viewpager}/>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  viewpager: {
    flex: 1,
  },
});

module.exports = MainScreen;
