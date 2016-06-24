'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

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
