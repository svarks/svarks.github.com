MainView = require './main-view'
data     = require '../data.yml'

require('./ga.js')

ga('create', 'UA-52492818-1', 'auto')
ga('send', 'pageview')

$(document).ready ->
  $('title').html [data.name, data.position].join(' - ')

  view = new MainView(el: '#wrapper')
  view.render(data)

  $('body').on 'click', 'a', ->
    ga('send', 'event', 'outbound', 'click', this.href)
