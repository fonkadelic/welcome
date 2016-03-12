'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var GuideSegment = require('./GuideSegment.js');
var MapView = require('./MapView.js');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView,
  Component,
  NavigatorIOS,
  StyleSheet,
  ScrollView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  wrapper: {
    flex: 1,
  },
});

var GuidePage = React.createClass({
  getInitialState: function() {
    return {
      segment: 1,
    }
  },

  onPress: function(data) {
    this.setState({
      segment: data,
    });
    console.log(data);
  },

  render: function() {
    return(
      <View style={styles.container}>
        <GuideSegment onPress={(data) => this.onPress(data)}/>
        <View style={styles.wrapper}>
          {this.state.segment === 1
          ? this.props.children
          : <MapView />}
        </View>
      </View>
    );
  },
});

module.exports = GuidePage;
