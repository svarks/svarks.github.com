Helpers = require '../helpers'

class MainView extends Backbone.View
  templates:
    main      : require('../templates/main')
    skills    : require('../templates/skills')
    companies : require('../templates/companies')

  render: (@data) ->
    @$el.html @templates.main(h: Helpers, data: @data)
    @_renderSkills()
    @_renderCompanies()

  _renderSkills: ->
    @$el.find('#skills .content').html @templates.skills(h: Helpers, skills: @data.skills)

  _renderCompanies: ->
    @$el.find('#companies .content').html @templates.companies(h: Helpers, companies: @data.companies)

module.exports = MainView
