dateFormats = ['MM/DD/YYYY', 'YYYY-MM-DD']

module.exports =
  markdown: (text) ->
    markdown.toHTML(text)

  timeBetween: (start, end) ->
    start = moment(start, dateFormats)
    end =
      if end == 'Today'
        moment()
      else
        moment(end, dateFormats)

    end.from(start, true)

  formatDate: (date, format = 'MMM YYYY') ->
    moment(date, dateFormats).format(format)
