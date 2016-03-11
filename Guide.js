'use strict';

var React = require('react-native');
var _styles = require('./styles.js');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView,
  Component,
  NavigatorIOS,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
  },
});

class Guide extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Guide</Text>
      </View>
    );
  }
}

module.exports = Guide;
