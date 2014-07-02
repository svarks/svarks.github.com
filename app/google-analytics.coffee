namespace = 'ga'

window['GoogleAnalyticsObject'] = namespace
window[namespace] ?= ->
  window[namespace].q ?= []
  window[namespace].q.push(arguments)
window[namespace].l = 1 * new Date()

script = document.createElement('script')
script.async = 1
script.src = '//www.google-analytics.com/analytics.js'

$('head').append(script)

module.exports = window[namespace]
