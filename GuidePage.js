'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var GuideSegment = require('./GuideSegment.js');

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

class GuidePage extends Component {


  render() {
    return(
      <View style={styles.container}>
        <GuideSegment />
        <View style={styles.wrapper}>
            {this.props.children}
        </View>
      </View>
    );
  }
}

module.exports = GuidePage;
