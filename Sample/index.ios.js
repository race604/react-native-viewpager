'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;

var MainScreen = require('./MainScreen');

AppRegistry.registerComponent('RNViewPager', () => MainScreen);
