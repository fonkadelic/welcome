'use strict';

var React = require('react-native');

var TabBarNavigation = require('./TabBarNavigation.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var welcome = React.createClass({
  render: function() {
    return (
      <TabBarNavigation />
    );
  },
});

var styles = StyleSheet.create({
});

AppRegistry.registerComponent('welcome', () => welcome);
