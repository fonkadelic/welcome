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
  box: {
    borderColor: "#fafafa",
    borderWidth: 0.5,
    borderRadius: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    backgroundColor: "#fafafa",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

module.exports = styles;
