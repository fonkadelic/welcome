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

var MOCKED_COLLECTION_DATA = [
  {id: 1, title: 'One'},
  {id: 2, title: 'Two'},
  {id: 3, title: 'Three'},
  {id: 4, title: 'Four'},
  {id: 5, title: 'Five'},
  {id: 6, title: 'Six'},
];

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  row: {
    justifyContent: 'center',
    margin: 5,
    width: 100,
    height: 120,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#656565',
    marginTop: 5
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#c373da',
  },
});

class NavigationGuide extends Component {
  render() {
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Guide',
          component: Guide,
        }}/>
    );
  }
}

class Guide extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: dataSource.cloneWithRows(MOCKED_COLLECTION_DATA)
    };
  }

  rowPressed() {
    console.log('Row Pressed');
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed()} underlayColor="transparent">
        <View>
          <View style={styles.row}>
            <View style={styles.circle}>
              <Image style={styles.thumb} source={{ uri: rowData.img_url }} />
            </View>
            <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        pageSize={3}
        scrollRenderAheadDistance={500}
        renderRow={this.renderRow.bind(this)}/>
    );
  }
}

module.exports = NavigationGuide;
