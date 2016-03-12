'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var Speech = require('react-native-speech');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

var Bye = React.createClass({
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

  onPress: function() {
    Speech.speak({
      text: "حول وانتهى",
      voice: 'ar'
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={this.onPress} underlayColor="transparent">
        <View style={styles.container}>
          <View>
            <Text style={{fontSize: 200}}>💙</Text>
            <Text style={{fontSize: 20, alignSelf:"center"}}>"Over and out"</Text>
          </View>
        </View>
      </TouchableHighlight>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
  },
});

module.exports = Bye;
