class App.Views.Main extends Backbone.View
  template: JST['templates/main']

  render: ->
    @$el.html @template(
      data: App.data
    )
