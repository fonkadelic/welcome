'use strict';

var React = require('react-native');

var TabBarNavigation = require('./TabBarNavigation.js');
var Language = require('./Landing/language.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
} = React;

var welcome = React.createClass({
  getInitialState: function() {
    return {
      modalVisible: true,
      language: null,
    }
  },

  onSelect: function(language) {
    this.setState({
      language: language,
    });
    this.setState({
      modalVisible: false,
    });
  },

  render: function() {
    return (
      <View style={{flex: 1}}>
        <Modal
          animated={true}
          visible={this.state.modalVisible}>
          <Language onSelect={this.onSelect} />
        </Modal>
        <TabBarNavigation language={this.state.language} />
      </View>
    );
  },
});

var styles = StyleSheet.create({
});

AppRegistry.registerComponent('welcome', () => welcome);
