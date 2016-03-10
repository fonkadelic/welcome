'use strict';

var React = require('react-native');
var _styles = require('./styles.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var Addresses = React.createClass({
  propTypes: {
  },

  getDefaultProps: function() {
    return {
    }
  },

  getInitialState: function() {
    return {
    }
  },

  render: function() {
    return (
      <View style={_styles.container}>
        <Text>
          Addresses
        </Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
});

module.exports = Addresses;
