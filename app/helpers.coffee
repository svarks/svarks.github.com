dateFormats = ['MM/DD/YYYY', 'YYYY-MM-DD']

module.exports =
  markdown: (text) ->
    markdown.toHTML(text)

  timeBetween: (start, end) ->
    start = moment(start, dateFormats)
    end = new Date if end == 'Today'
    moment(end, dateFormats).from(start, true)

  formatDate: (date, format = 'MMM YYYY') ->
    moment(date, dateFormats).format(format)
