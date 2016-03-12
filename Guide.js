'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var GuideDetail = require('./GuideDetail.js');
var GuideItem = require('./GuideItem.js');

var jsonData = require('./guides.json')

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
  list: {
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#eeeeee',
  },
});

class Guide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guides: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.id !== row2.id,
      }),
    };
  }

  componentWillMount() {
    var startGuides = jsonData.start_guides;
    var filtered = jsonData.guides.filter(prop => startGuides.includes(prop.id));

    this.setState({
      guides: jsonData.guides,
      dataSource: this.state.dataSource.cloneWithRows(filtered),
    });
  }

  rowPressed(rowData) {
    this.props.navigator.push({
        title: rowData.title,
        component: GuideDetail,
        barTintColor: "#156fc0",
        titleTextColor: "white",
        tintColor: "white",
        passProps: {guides: this.state.guides, subIDs: rowData.sub_guides}
    });
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <GuideItem guide={rowData} onPress={this.rowPressed.bind(this)} />
    );
  }

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.list}/>
    );
  }
}

module.exports = Guide;
