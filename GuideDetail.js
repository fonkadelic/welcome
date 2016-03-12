'use strict';

var React = require('react-native');
var _styles = require('./styles.js');
var GuideItem = require('./GuideItem.js');
var GuideDetailItems = require('./GuideDetailItems.js');


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

  rowPressed(rowData) {
    var subGuides = rowData.sub_guides;
    if (subGuides.length > 0) {
      this.props.navigator.push({
          title: rowData.title,
          component: GuideDetail,
          passProps: {guides: this.props.guides, subIDs: subGuides},
          barTintColor: "#156fc0",
          titleTextColor: "white",
          tintColor: "white"
      });
    } else {
      this.props.navigator.push({
          title: rowData.title,
          component: GuideDetailItems,
          barTintColor: "#156fc0",
          titleTextColor: "white",
          tintColor: "white"
      });
    }
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <GuideItem guide={rowData} onPress={this.rowPressed.bind(this)} />
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
