'use strict';

var React = require('react-native');
var jsonDetailItems = require('./DetailItems.json');
var InfoBox = require('./InfoBox.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

var GuideDetailItems = React.createClass({
  propTypes: {
  },

  getDefaultProps: function() {
    return {
    }
  },

  componentWillMount: function() {
    this.setState({
      items: jsonDetailItems.items,
      dataSource: this.state.dataSource.cloneWithRows(jsonDetailItems.items),
    });
  },

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.id !== row2.id,
      }),
    }
  },

  renderRow: function(data) {
    console.log(data);
    console.log("ENDE");
    return (
      <InfoBox
        {...data}
        navigator={this.props.navigator}
      />
    );
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
          <Image
          source={require('image!restaurant')}
          style={{height: 0}}
          />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = GuideDetailItems;
