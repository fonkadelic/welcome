'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var Icon = require('react-native-vector-icons/FontAwesome');
var Speech = require('react-native-speech');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

var ChatItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object,
    text: React.PropTypes.string,
    german_text: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      image: require('image!bus'),
      text: null,
      german_text: null,
    }
  },

  getInitialState: function() {
    return {

    }
  },

  speak: function() {
    Speech.speak({
      text: this.props.german_text,
      voice: 'en'
    });
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this.speak} underlayColor="transparent">
      <View style={[styles.container]}>
        <View style={styles.circle}>
          <Image
          source={this.props.image}
          style={styles.image} />
        </View>
        <View style={[styles.text_box]}>
          <Icon style={{flex: 0.4, marginLeft: 10,}} name="comments" size={19} color="#fff" />
          <Text style={{color: "white", flex: 0.6}}> {this.props.text} </Text>
        </View>
        <View style={[styles.text]}>
          <Text style={styles.text_style}> {this.props.german_text} </Text>
        </View>
      </View>
      </TouchableHighlight>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 100,
  },
  circle: {
    height: 100,
    width: 100,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text_box: {
    flexDirection: "row",
    backgroundColor: "#42a5f5",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    width: 100,
    height: 36,
    borderWidth: 1,
    borderColor: "#42a5f5",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  text: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text_style: {
    fontSize: 13,
    color: "#9b9b9b",
  },
  image: {
    height: 50,
    width: 50,
  }
});

module.exports = ChatItem;
