var Header  = require('./page/header');
var Content = require('./page/content');

var Page = React.createClass({
  render() {
    const { data } = this.props;

    return(
      <div className="page">
        <Header data={data} />
        <Content data={data} />
      </div>
    );
  }
});

module.exports = Page;
