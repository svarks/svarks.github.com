const MarkdownContent = require('./content/markdown-content');
const Company         = require('./content/company');
const Skill           = require('./content/skill');

const Content = React.createClass({
  render() {
    const { data } = this.props;

    const skills = _.map(data.skills, function(skill) {
      return <Skill key={skill.category} data={skill} />;
    });

    const companies = _.map(data.companies, function(company) {
      return <Company key={company.name} data={company} />;
    });

    return (
      <div className="page-content">
        <div className="block summary">
          <div className="header">Summary</div>
          <MarkdownContent className="content" content={data.summary} />
        </div>

        <div className="block skills">
          <div className="header">Skills</div>
          <div className="content">
            { skills }
          </div>
        </div>

        <div className="block companies">
          <div className="header">Work Experience</div>
          <div className="content">
            { companies }
          </div>
        </div>

        <div className="block education">
          <div className="header">Education</div>
          <MarkdownContent className="content" content={data.education} />
        </div>
      </div>
    );
  }
});

module.exports = Content;
