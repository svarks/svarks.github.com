const MarkdownContent = require('./markdown-content');

const Skill = React.createClass({
  render() {
    const { data } = this.props;

    return (
      <div className="skill">
        <div className="header">
          <div className="title">
            { data.category }
          </div>
        </div>

        <MarkdownContent className="content" content={data.items} />
      </div>
    );
  }
});

module.exports = Skill;
