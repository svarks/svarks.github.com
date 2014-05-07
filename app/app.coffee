MainView = require './views/main'
data     = require './data.yml'

$(document).ready ->
  $('title').html [data.name, data.position].join(' - ')

  view = new MainView(el: '#wrapper')
  view.render(data)
