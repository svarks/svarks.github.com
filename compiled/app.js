(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {"name":"Sergey Varaksin","location":"San Francisco, CA","position":"Ruby on Rails Engineer","email":"varaksin86@gmail.com","phone":"+1 (312) 823-6093","github":"http://github.com/svarks","linkedin":"http://www.linkedin.com/in/svarks","summary":"Web application development has been my passion for about 10 years.\nI am a full stack engineer, being equally good at building backend systems or writing javascript and css on the client side.\nI also enjoy TDD and pair programming.\n\nI always felt that it is important to pay attention to details and keep things clean and simple.\nAnd I love ruby for that.\n","skills":[{"category":"Development Processes","items":"- Agile\n- TDD / BDD\n- Pair programming\n- OOP / Functional programming\n"},{"category":"Ruby","items":"- **Rails**\n- Sinatra\n- **RSpec**\n- Minitest\n- Capybara\n- **Sidekiq**\n- Rails API / Grape\n"},{"category":"Javascript","items":"- **jQuery**\n- **Backbone.js**\n- **React.js**\n- **Mocha + Chai**\n- **ES6 (Babel)**\n- Node.js\n- D3.js\n- Angular.js\n- Prototype\n- Dojo\n- YUI\n- Mootools\n"},{"category":"Databases","items":"- **PostgreSQL**\n- **MongoDB**\n- **Redis**\n- MySQL\n"},{"category":"Deployment","items":"- **Capistrano**\n- **Nginx + Unicorn**\n- Puppet / Chef\n"},{"category":"Preferred Tools","items":"- **MacOSX**\n- **Vim**\n- **Git**\n- **Zsh + Tmux**\n- **rbenv**\n"}],"companies":[{"name":"Experiment Inc.","url":"https://experiment.com/","date_start":"8/19/2015","date_end":"Today","position":"Web Engineer","description":"Worked on a Rails app as a full stack engineer.\nIntroduced Ract.js as a replacement for legacy Backbone code.\n\n* Rails\n* React.js / Backbone\n* Postgres\n"},{"name":"BeRecruited Inc.","url":"http://new.berecruited.com/","date_start":"4/7/2014","date_end":"8/14/2015","position":"Web Engineer","description":"Full stack engineer:\n\n* Ruby on Rails\n* Javascript\n* MySQL\n"},{"name":"Triggit Inc.","url":"http://www.triggit.com/","date_start":"08/08/2013","date_end":"04/11/2014","position":"Web Engineer","description":"Worked on a rails app as a full stack engineer:\n\n* Refactoring monolithic rails app into rails API + Angular.js client on frontend\n* Building cross-browser javascript widget using Node.js (gulp, browserify, coffeescript)\n"},{"name":"Groupon Inc.","url":"http://www.groupon.com/","date_start":"11/27/2012","date_end":"08/06/2013","position":"Ruby on Rails Consultant","description":"Internal web application for sales department.\n\n* Bulding responsive Backbone.js apps for desktop and mobile\n* Rails API that acts as a proxy for Salesforce\n* ETL data processes, geo search in Postgres\n"},{"name":"Sears Holdings Corporation","url":"http://www.searsholdings.com/","date_start":"02/01/2012","date_end":"11/26/2012","position":"Ruby on Rails Consultant","description":"<http://kenmoreconnect.com/>\n\n* I had taken a lead developer role on new project providing post-purchase experience for retail store customers.\n* Rich client interface that fully degrades to iPhone screen.\n* Large data import and processing.\n"},{"name":"Sphere Consulting Inc.","url":"http://sphereinc.com/","date_start":"04/01/2011","date_end":"02/01/2012","position":"Ruby on Rails Developer","description":"Worked as consultant on many projects, doing the following:\n\n* backend and frontend development\n* code refactoring and optimisation\n* production environment setup\n* data migrations\n"},{"name":"Freelance","date_start":"03/01/2009","date_end":"04/01/2011","position":"Ruby on Rails Developer","description":"I had multiple rails contracts working as a full stack consultant.\n\nWorked both in a team and as a solo developer providing full range of services from writing HTML and CSS to setting up monitoring on the server.\n"},{"name":"Sibers","url":"http://sibers.com/","date_start":"08/01/2008","date_end":"03/01/2009","position":"PHP Developer","description":"Worked on many projects using these technologies:\n\n- Zend Framework, Symfony\n- Mysql, Lucene\n- JQuery, Dojo\n"},{"name":"New Siberia LLC","date_start":"09/01/2006","date_end":"06/01/2008","position":"PHP Developer,<br/> Web Server Administrator","description":"- Implemented a custom made CRM using PHP\n- Web server administration\n"}],"education":"NSAWT, Novosibirsk, Russia\n\nMS, Computer Science\n\n2003 - 2008\n"}
},{}],2:[function(require,module,exports){
'use strict';

var data = require('../data.yml');
var Page = require('./page');

var init = function init() {
  require('./ga.js');

  ga('create', 'UA-52492818-1', 'auto');
  ga('send', 'pageview');

  $('title').html([data.name, data.position].join(' - '));

  $('body').on('click', 'a', function () {
    ga('send', 'event', 'outbound', 'click', this.href);
  });

  ReactDOM.render(React.createElement(Page, { data: data }), $('#wrapper')[0]);
};

init();

},{"../data.yml":1,"./ga.js":3,"./page":4}],3:[function(require,module,exports){
'use strict';

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

},{}],4:[function(require,module,exports){
'use strict';

var Header = require('./page/header');
var Content = require('./page/content');

var Page = React.createClass({
  displayName: 'Page',
  render: function render() {
    var data = this.props.data;

    return React.createElement(
      'div',
      { className: 'page' },
      React.createElement(Header, { data: data }),
      React.createElement(Content, { data: data })
    );
  }
});

module.exports = Page;

},{"./page/content":5,"./page/header":9}],5:[function(require,module,exports){
'use strict';

var MarkdownContent = require('./content/markdown-content');
var Company = require('./content/company');
var Skill = require('./content/skill');

var Content = React.createClass({
  displayName: 'Content',
  render: function render() {
    var data = this.props.data;

    var skills = _.map(data.skills, function (skill) {
      return React.createElement(Skill, { key: skill.category, data: skill });
    });

    var companies = _.map(data.companies, function (company) {
      return React.createElement(Company, { key: company.name, data: company });
    });

    return React.createElement(
      'div',
      { className: 'page-content' },
      React.createElement(
        'div',
        { className: 'block summary' },
        React.createElement(
          'div',
          { className: 'header' },
          'Summary'
        ),
        React.createElement(MarkdownContent, { className: 'content', content: data.summary })
      ),
      React.createElement(
        'div',
        { className: 'block skills' },
        React.createElement(
          'div',
          { className: 'header' },
          'Skills'
        ),
        React.createElement(
          'div',
          { className: 'content' },
          skills
        )
      ),
      React.createElement(
        'div',
        { className: 'block companies' },
        React.createElement(
          'div',
          { className: 'header' },
          'Work Experience'
        ),
        React.createElement(
          'div',
          { className: 'content' },
          companies
        )
      ),
      React.createElement(
        'div',
        { className: 'block education' },
        React.createElement(
          'div',
          { className: 'header' },
          'Education'
        ),
        React.createElement(MarkdownContent, { className: 'content', content: data.education })
      )
    );
  }
});

module.exports = Content;

},{"./content/company":6,"./content/markdown-content":7,"./content/skill":8}],6:[function(require,module,exports){
'use strict';

var MarkdownContent = require('./markdown-content');

var Company = React.createClass({
  displayName: 'Company',
  render: function render() {
    var dateFormats = ['MM/DD/YYYY', 'YYYY-MM-DD'];

    var timeBetween = function timeBetween(start, end) {
      start = moment(start, dateFormats);

      if (end === 'Today') {
        end = moment();
      } else {
        end = moment(end, dateFormats);
      }

      var pluralize = function pluralize(number, word) {
        return number + ' ' + word + (number > 1 ? 's' : '');
      };

      var months = end.diff(start, 'month');
      var years = Math.floor(months / 12);

      var result = [];

      if (years > 0) {
        result.push(pluralize(years, 'year'));
      }

      result.push(pluralize(months % 12, 'month'));

      return result.join(' and ');
    };

    var formatDate = function formatDate(date) {
      if (date === 'Today') return date;

      return moment(date, dateFormats).format('MMM YYYY');
    };

    var data = this.props.data;

    return React.createElement(
      'div',
      { className: 'company' },
      React.createElement(
        'div',
        { className: 'header' },
        React.createElement(
          'div',
          { className: 'time-range' },
          React.createElement(
            'div',
            { className: 'period' },
            '(',
            timeBetween(data.date_start, data.date_end),
            ')'
          ),
          React.createElement(
            'div',
            { className: 'dates' },
            formatDate(data.date_start),
            '  -  ',
            formatDate(data.date_end)
          )
        ),
        React.createElement(
          'div',
          { className: 'title' },
          data.url ? React.createElement(
            'a',
            { href: data.url },
            data.name
          ) : data.name
        ),
        React.createElement('div', { className: 'position', dangerouslySetInnerHTML: { __html: data.position } })
      ),
      React.createElement(MarkdownContent, { className: 'content', content: data.description })
    );
  }
});

module.exports = Company;

},{"./markdown-content":7}],7:[function(require,module,exports){
"use strict";

var MarkdownContent = React.createClass({
  displayName: "MarkdownContent",

  propTypes: {
    className: React.PropTypes.string,
    content: React.PropTypes.string.isRequired
  },

  render: function render() {
    var html = marked(this.props.content);

    return React.createElement("div", { className: this.props.className, dangerouslySetInnerHTML: { __html: html } });
  }
});

module.exports = MarkdownContent;

},{}],8:[function(require,module,exports){
"use strict";

var MarkdownContent = require('./markdown-content');

var Skill = React.createClass({
  displayName: "Skill",
  render: function render() {
    var data = this.props.data;

    return React.createElement(
      "div",
      { className: "skill" },
      React.createElement(
        "div",
        { className: "header" },
        React.createElement(
          "div",
          { className: "title" },
          data.category
        )
      ),
      React.createElement(MarkdownContent, { className: "content", content: data.items })
    );
  }
});

module.exports = Skill;

},{"./markdown-content":7}],9:[function(require,module,exports){
"use strict";

var Header = React.createClass({
  displayName: "Header",
  render: function render() {
    var data = this.props.data;

    return React.createElement(
      "div",
      { className: "page-header" },
      React.createElement(
        "div",
        { className: "details" },
        React.createElement(
          "p",
          { className: "name" },
          data.name
        ),
        React.createElement(
          "p",
          { className: "position" },
          data.position
        ),
        React.createElement(
          "p",
          { className: "location" },
          data.location
        )
      ),
      React.createElement(
        "div",
        { className: "contact" },
        React.createElement(
          "p",
          { className: "email" },
          React.createElement(
            "a",
            { href: 'mailto:' + data.email },
            data.email
          )
        ),
        React.createElement(
          "p",
          { className: "phone" },
          data.phone
        ),
        React.createElement(
          "p",
          { className: "social" },
          React.createElement(
            "a",
            { target: "_blank", href: data.linkedin, title: "Linkedin" },
            React.createElement("span", { className: "icon icon-linkedin" })
          ),
          React.createElement(
            "a",
            { target: "_blank", href: data.github, title: "Github" },
            React.createElement("span", { className: "icon icon-github" })
          )
        )
      )
    );
  }
});

module.exports = Header;

},{}]},{},[2]);
