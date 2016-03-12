'use strict';

var React = require('react-native');
var _styles = require('../styles.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

var LanguageBox = React.createClass({
  propTypes: {
    image: React.PropTypes.object,
    text: React.PropTypes.string,
    onSelect: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      image: require("image!syria"),
      text: "English",
      onSelect: function () {},
    }
  },

  getInitialState: function() {
    return {
    }
  },

  render: function() {
    return (
      <TouchableHighlight onPress={()=> this.props.onSelect(this.props.text)} underlayColor='transparent'>
        <View style={[styles.container, _styles.box]}>
          <Image
            source={this.props.image}
            style={styles.image} />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    height: 153,
    width: 165,
  },
  image: {
    height: 67,
    width: 100,
    margin: 10,
  },
  text: {
    fontSize: 24,
  },
});

module.exports = LanguageBox;
