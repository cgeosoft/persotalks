module.exports = function (hexo) {
  return {
    json: function (obj) {
      return JSON.stringify(obj, " ", 2)
    },
    tag: function (t) {
      return `>${t}<`
    }
  }
}