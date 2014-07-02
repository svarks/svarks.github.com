MainView = require './views/main'
data     = require './data.yml'

$(document).ready ->
  $('title').html [data.name, data.position].join(' - ')

  view = new MainView(el: '#wrapper')
  view.render(data)

  ga = require('./google-analytics')
  ga('create', 'UA-52492818-1', 'auto')
  ga('send', 'pageview')
