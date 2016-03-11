'use strict';

var React = require('react-native');
var _styles = require('./styles.js');

var SearchBar = require('react-native-search-bar');
var info_data = require('./info.json');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

var InfoSearch = React.createClass({
  propTypes: {
  },

  getDefaultProps: function() {
    return {
    }
  },

  getInitialState: function() {
    return {
      infoSearchSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      info:  JSON.parse(JSON.stringify(info_data)),
    }
  },


  search: function() {

  },

  search: function() {

  },

  cancel: function() {

  },

  change: function() {

  },

  _renderRow: function(data) {
    console.log(data);
    return (
      <View style={styles.row_item}>
        <View style={styles.first}>
          <Text style={styles.title}>
            {data.title}
          </Text>
          <Text style={styles.text}>
            {data.text}
          </Text>
        </View>
        <View style={styles.second}>
          <Image />
        </View>

      </View>
    );
  },

  componentWillMount: function() {

    this.setState({
      infoSearchSource: this.state.infoSearchSource.cloneWithRows(
        this.state.info,
      ),
    });
  },

  componentDidMoutn: function() {
    this.refs.searchBar.focus();
  },

  render: function() {
    return (
      <View style={_styles.container}>
        <SearchBar
          ref='searchBar'
          placeholder='Search'
          showsCancelButton={true}
          onChangeText={this.test}
          onSearchButtonPress={this.search}
          onCancelButtonPress={this.test}
          />
        <View style={styles.minicontainer}>
          <ListView
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.infoSearchSource}
            renderRow={this._renderRow}
          />
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  minicontainer: {
    flex: 1,
  },
  row_item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontWeight: "bold",
  },
  text: {

  },
  first: {
    flex: 0.7
  },
  second: {
    flex: 0.3,
  }
});

module.exports = InfoSearch;
