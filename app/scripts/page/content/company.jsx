const MarkdownContent = require('./markdown-content');

const Company = React.createClass({
  render() {
    const dateFormats = ['MM/DD/YYYY', 'YYYY-MM-DD'];

    const timeBetween = function(start, end) {
      start = moment(start, dateFormats);

      if (end === 'Today') {
        end = moment();
      } else {
        end = moment(end, dateFormats);
      }

      const pluralize = function(number, word) {
        return `${number} ${word}${number > 1 ? 's' : ''}`
      };

      const months = end.diff(start, 'month');
      const years = Math.floor(months / 12);

      const result = [];

      if (years > 0) {
        result.push(pluralize(years, 'year'));
      }

      result.push(pluralize(months % 12, 'month'));

      return result.join(' and ');
    };

    const formatDate = function(date) {
      if (date === 'Today') return date;

      return moment(date, dateFormats).format('MMM YYYY');
    };

    const { data } = this.props;

    return(
      <div className="company">
        <div className="header">
          <div className="time-range">
            <div className="period">
              ({ timeBetween(data.date_start, data.date_end) })
            </div>

            <div className="dates">
              { formatDate(data.date_start) }
              &nbsp; - &nbsp;
              { formatDate(data.date_end) }
            </div>
          </div>

          <div className="title">
            {
              data.url ?
              <a href={ data.url }>{ data.name }</a>
              : data.name
            }
          </div>

          <div className="position" dangerouslySetInnerHTML={ { __html: data.position } } />
        </div>

        <MarkdownContent className="content" content={ data.description } />
      </div>
    );
  }
});

module.exports = Company;
