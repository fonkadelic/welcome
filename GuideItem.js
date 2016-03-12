'use strict';

var React = require('react-native');
var _styles = require('./styles.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

var styles = StyleSheet.create({
  separator: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: '#000000',
    marginTop: 8,
    marginBottom: 8,
    opacity: 0.12
  },
  emoji: {
    fontSize: 52,
  },
  title: {
    fontSize: 24,
    color: '#42a5f5',
    paddingTop: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#9b9b9b',
    paddingBottom: 5,
  },
  phonenumber: {
    fontSize: 20,
    marginLeft: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  rowContainer: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    shadowOpacity: 0.24,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});

var GuideItem = React.createClass({
  propTypes: {
    guide: React.PropTypes.object,
    onPress: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      guide: null,
      onPress: null,
    }
  },

  render: function() {
    return (
      <TouchableHighlight
        onPress={() => this.props.onPress(this.props.guide)}
        underlayColor='transparent'>
        <View style={[_styles.box, styles.rowContainer]}>
          <Text style={styles.emoji}>{this.props.guide.emoji}</Text>
          <View style={styles.separator} />
          <Text style={styles.title}>{this.props.guide.title}</Text>
          <Text style={styles.subtitle}>{this.props.guide.subtitle}</Text>
          {this.props.guide.phonenumber
            ? <Text style={styles.phonenumber}>{this.props.guide.phonenumber}</Text>
            : <View />
          }
        </View>
      </TouchableHighlight>
    );
  },
});

module.exports = GuideItem;
