module.exports = function (hexo) {
  return {
    json: function (obj) {
      return JSON.stringify(obj, " ", 2)
    },
    tag: function (t) {
      return `>${t}<`
    },
    dateformat: function (t) {
      var d = new Date(t)
      var datestring =
        d.getFullYear() + "-" +
        ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
        ("0" + d.getDate()).slice(-2) +
        " " +
        ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
      return datestring
    }
  }
}