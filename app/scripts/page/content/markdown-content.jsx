const MarkdownContent = React.createClass({
  propTypes: {
    className : React.PropTypes.string,
    content   : React.PropTypes.string.isRequired
  },

  render() {
    const html = marked(this.props.content);

    return <div className={ this.props.className } dangerouslySetInnerHTML={{ __html: html }} />;
  }
});

module.exports = MarkdownContent;
