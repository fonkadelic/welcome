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

class GuideDetail extends Component {
    render() {
      return (
        <View style={_styles.container}>
          <Text>Profile</Text>
        </View>
      );
    }
}

module.exports = GuideDetail;
