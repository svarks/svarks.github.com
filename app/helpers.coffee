App.Helpers =
  markdown: (text) ->
    converter = new Markdown.Converter()
    converter.makeHtml text

  time_between: (start, end) ->
    if end == 'Today'
      end = new Date
    moment(end).from(start, true)

  format_date: (date, format = 'MMM YYYY') ->
    moment(date).format(format)

HAML.globals = -> App.Helpers
