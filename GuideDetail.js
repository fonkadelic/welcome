'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var GuideItem = require('./GuideItem.js')

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

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.id !== r2.id});
    var filtered = props.guides.filter(prop => props.subIDs.includes(prop.id));  

    this.state = {
      dataSource: dataSource.cloneWithRows(filtered)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <GuideItem guide={rowData} />
    );
  }

  render() {
    return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}/>
  );
  }
}

module.exports = GuideDetail;
