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

  search: function(search) {
    var that = this;
    var search = search.toLowerCase();

    // cast items to array
    var info = Object.keys(that.state.info).map(
      function(k) { return that.state.info[k] }
    );

    // filter items based on search key
    var filteredItems = info.filter(
      function (value) {
        var title = value.title.toString().toLowerCase();
        var text = value.text.toString().toLowerCase();

        if (title.includes(search)){
          return true;
        }
        else if (text.includes(search)) {
          return true;
        }
        return false;
      });

    // update datasource based on filter
    this.setState ({
      infoSearchSource: this.state.infoSearchSource.cloneWithRows(filteredItems),
    });
  },

  cancel: function() {
    // set items back to original datasource
    this.setState ({
      infoSearchSource: this.state.infoSearchSource.cloneWithRows(this.state.info),
    });
  },

  _renderRow: function(data) {
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
          <Image
            source={require('image!dummy')}
            style={styles.image} />
        </View>
      </View>
    );
  },

  componentWillMount: function() {
    // set datasource from json elements
    this.setState({
      infoSearchSource: this.state.infoSearchSource.cloneWithRows(
        this.state.info,
      ),
    });
  },

  render: function() {
    return (
      <View style={_styles.container}>
        <SearchBar
          ref='searchBar'
          placeholder='Search'
          showsCancelButton={true}
          onChangeText={this.search}
          onCancelButtonPress={this.cancel}
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
    flexDirection: 'row',
  },
  title: {
    fontWeight: "bold",
  },
  text: {
    paddingTop: 10,
  },
  first: {
    flex: 0.8,
  },
  second: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  image: {
    width: 70,
    height: 40,
  },
});

module.exports = InfoSearch;
