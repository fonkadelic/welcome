'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var GridView = require('react-native-grid-view');
var GuideItem = require('./GuideItem.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var Guide = React.createClass({
  propTypes: {
  },

  getDefaultProps: function() {
    return {
    }
  },

  getInitialState: function() {
    return {
      items: [
        "eins", "zwei", "drei",
        "eins", "zwei", "drei",
      ],
    }
  },

  renderItem: function(item) {
    return(
      <View
        style={{margin: 20}}
        key={item}>
        <GuideItem />
      </View>
    );
  },

  render: function() {
    return (
      <View style={_styles.container}>
        <Text>
          Guide
        </Text>
        <GridView
          items={this.state.items}
          itemsPerRow={3}
          renderItem={this.renderItem}
        />
      </View>
    );
  },
});

var styles = StyleSheet.create({
});

module.exports = Guide;
