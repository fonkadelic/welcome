var { StyleSheet } = require("react-native");

var styles = StyleSheet.create({
  /*
   * GENERAL
   */
  container: {
    flex: 1,
    marginTop: 20,
  },
  default_font: {
    fontFamily: "SF UI Text",
  },
  box_shadow: {
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  box: {
    borderColor: "#fafafa",
    borderWidth: 0.5,
    borderRadius: 3,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    backgroundColor: "#fafafa",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationContainer: {
    flex: 1,
  }
});

module.exports = styles;
