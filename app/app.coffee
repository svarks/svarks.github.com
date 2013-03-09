# = require_self
# = require helpers
# = require_tree ./templates
# = require_tree ./views

window.App ?= {}

App.Views = {}

$(document).ready ->
  new App.Views.Main
    el: '#wrapper'
  .render()
