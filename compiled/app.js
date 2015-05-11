(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {"name":"Sergey Varaksin","location":"San Francisco, CA","position":"Ruby on Rails Engineer","email":"varaksin86@gmail.com","phone":"+1 (312) 823-6093","github":"http://github.com/svarks","linkedin":"http://www.linkedin.com/in/svarks","summary":"Web application development has been my passion for about 10 years.\nI am a full stack engineer, being equally good at building backend systems or writing javascript and css on the client side.\nI also enjoy TDD and pair programming.\n\nI always felt that it is important to pay attention to details and keep things clean and simple.\nAnd I love ruby for that.\n","skills":[{"category":"Development Processes","items":"- Agile\n- TDD / BDD\n- Pair programming\n- OOP / Functional programming\n"},{"category":"Ruby","items":"- **Rails**\n- Sinatra\n- **RSpec**\n- Minitest\n- Capybara\n- **Haml / Sass / Coffescript**\n- **Sidekiq**\n- Rails API / Grape\n"},{"category":"Javascript","items":"- **jQuery**\n- **Backbone.js**\n- **React.js**\n- **Mocha + Chai**\n- Node.js\n- D3.js\n- Angular.js\n- Prototype\n- Dojo\n- YUI\n- Mootools\n"},{"category":"Databases","items":"- **PostgreSQL**\n- **MongoDB**\n- **Redis**\n- MySQL\n"},{"category":"Deployment","items":"- **Capistrano**\n- **Nginx + Unicorn**\n- Puppet / Chef\n"},{"category":"Preferred Tools","items":"- **MacOSX**\n- **Vim**\n- **Git**\n- **Zsh + Tmux**\n- **rbenv**\n"}],"companies":[{"name":"Experiment Inc.","url":"https://experiment.com/","date_start":"8/19/2015","date_end":"Today","position":"Web Engineer","description":"Worked on a Rails app as a full stack engineer.\nIntroduced Ract.js as a replacement for legacy Backbone code.\n\n* Rails\n* React.js / Backbone\n* Postgres\n"},{"name":"beRecruited Inc.","url":"http://new.berecruited.com/","date_start":"4/7/2014","date_end":"8/14/2015","position":"Web Engineer","description":"Full stack engineer:\n\n* Ruby on Rails\n* Javascript\n* MySQL\n"},{"name":"Triggit Inc.","url":"http://www.triggit.com/","date_start":"12/2/2013","date_end":"04/11/2014","position":"Web Engineer","description":"\n* Refactoring monolithic rails app into rails API + Angular.js client on frontend\n* Building cross-browser javascript widget using Node.js (gulp, browserify, coffeescript)\n"},{"name":"Remind101 Inc.","url":"https://www.remind101.com/","date_start":"08/08/2013","date_end":"11/28/2013","position":"Web Engineer","description":"Full stack web engeneer:\n\n* Rails / Sinatra\n* PostgreSQL\n* Angular.js / Coffeescript\n* Worked on lots of performance optimisations\n"},{"name":"Groupon Inc.","url":"http://www.groupon.com/","date_start":"11/27/2012","date_end":"08/06/2013","position":"Ruby on Rails Consultant","description":"Internal web application for sales department.\n\n* Bulding responsive Backbone.js apps for desktop and mobile\n* Rails API that acts as a proxy for Salesforce\n* ETL data processes, geo search in Postgres\n"},{"name":"Sears Holdings Corporation","url":"http://www.searsholdings.com/","date_start":"02/01/2012","date_end":"11/26/2012","position":"Ruby on Rails Consultant","description":"<http://kenmoreconnect.com/>\n\n* I had taken a lead developer role on new project providing post-purchase experience for retail store customers.\n* Rich client interface that fully degrades to iPhone screen.\n* Large data import and processing.\n"},{"name":"Sphere Consulting Inc.","url":"http://sphereinc.com/","date_start":"04/01/2011","date_end":"02/01/2012","position":"Ruby on Rails Developer","description":"Worked as consultant on many projects, doing the following:\n\n* backend and frontend development\n* code refactoring and optimisation\n* production environment setup\n* data migrations\n"},{"name":"Freelance","date_start":"03/01/2009","date_end":"04/01/2011","position":"Ruby on Rails Developer","description":"I had multiple rails contracts working as a full stack consultant.\n\nWorked both in a team and as a solo developer providing full range of services from writing HTML and CSS to setting up monitoring on the server.\n"},{"name":"Sibers","url":"http://sibers.com/","date_start":"08/01/2008","date_end":"03/01/2009","position":"PHP Developer","description":"Worked on many projects using these technologies:\n\n- Zend Framework, Symfony\n- Mysql, Lucene\n- JQuery, Dojo\n"},{"name":"New Siberia LLC","date_start":"09/01/2006","date_end":"06/01/2008","position":"PHP Developer,<br/> Web Server Administrator","description":"- Implemented a custom made CRM using PHP\n- Web server administration\n"}],"education":"NSAWT, Novosibirsk, Russia\n\nMS, Computer Science\n\n2003 - 2008\n"}
},{}],2:[function(require,module,exports){
var MainView, data;

MainView = require('./main-view');

data = require('../data.yml');

require('./ga.js');

ga('create', 'UA-52492818-1', 'auto');

ga('send', 'pageview');

$(document).ready(function() {
  var view;
  $('title').html([data.name, data.position].join(' - '));
  view = new MainView({
    el: '#wrapper'
  });
  view.render(data);
  return $('body').on('click', 'a', function() {
    return ga('send', 'event', 'outbound', 'click', this.href);
  });
});


},{"../data.yml":1,"./ga.js":3,"./main-view":5}],3:[function(require,module,exports){
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

},{}],4:[function(require,module,exports){
var dateFormats;

dateFormats = ['MM/DD/YYYY', 'YYYY-MM-DD'];

module.exports = {
  markdown: function(text) {
    return markdown.toHTML(text);
  },
  timeBetween: function(start, end) {
    start = moment(start, dateFormats);
    end = end === 'Today' ? moment() : moment(end, dateFormats);
    return end.from(start, true);
  },
  formatDate: function(date, format) {
    if (format == null) {
      format = 'MMM YYYY';
    }
    return moment(date, dateFormats).format(format);
  }
};


},{}],5:[function(require,module,exports){
var Helpers, MainView,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Helpers = require('./helpers');

MainView = (function(superClass) {
  extend(MainView, superClass);

  function MainView() {
    return MainView.__super__.constructor.apply(this, arguments);
  }

  MainView.prototype.templates = {
    main: require('../templates/main'),
    skills: require('../templates/skills'),
    companies: require('../templates/companies')
  };

  MainView.prototype.render = function(data) {
    this.data = data;
    this.$el.html(this.templates.main({
      h: Helpers,
      data: this.data
    }));
    this._renderSkills();
    return this._renderCompanies();
  };

  MainView.prototype._renderSkills = function() {
    return this.$el.find('#skills .content').html(this.templates.skills({
      h: Helpers,
      skills: this.data.skills
    }));
  };

  MainView.prototype._renderCompanies = function() {
    return this.$el.find('#companies .content').html(this.templates.companies({
      h: Helpers,
      companies: this.data.companies
    }));
  };

  return MainView;

})(Backbone.View);

module.exports = MainView;


},{"../templates/companies":6,"../templates/main":7,"../templates/skills":8,"./helpers":4}],6:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (companies, h, undefined) {
// iterate companies
;(function(){
  var $$obj = companies;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var company = $$obj[$index];

buf.push("<div class=\"company\"><div class=\"header\"><div class=\"title left\">");
if ( company.url)
{
buf.push("<a" + (jade.attr("href", company.url, true, false)) + " target=\"_blank\">" + (jade.escape(null == (jade_interp = company.name) ? "" : jade_interp)) + "</a>");
}
else
{
buf.push(jade.escape(null == (jade_interp = company.name) ? "" : jade_interp));
}
buf.push("</div><div class=\"position left\">" + (null == (jade_interp = company.position) ? "" : jade_interp) + "</div><div class=\"period right\"><div class=\"dates right\">" + (jade.escape(null == (jade_interp = h.formatDate(company.date_start)) ? "" : jade_interp)) + (jade.escape(null == (jade_interp = ' - ') ? "" : jade_interp)));
if ( company.date_end == 'Today')
{
buf.push("Today");
}
else
{
buf.push(jade.escape(null == (jade_interp = h.formatDate(company.date_end)) ? "" : jade_interp));
}
buf.push("</div><div class=\"total right\">(" + (jade.escape((jade_interp = h.timeBetween(company.date_start, company.date_end)) == null ? '' : jade_interp)) + ")</div></div><div class=\"clear\"></div></div><div class=\"content\">" + (null == (jade_interp = h.markdown(company.description)) ? "" : jade_interp) + "</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var company = $$obj[$index];

buf.push("<div class=\"company\"><div class=\"header\"><div class=\"title left\">");
if ( company.url)
{
buf.push("<a" + (jade.attr("href", company.url, true, false)) + " target=\"_blank\">" + (jade.escape(null == (jade_interp = company.name) ? "" : jade_interp)) + "</a>");
}
else
{
buf.push(jade.escape(null == (jade_interp = company.name) ? "" : jade_interp));
}
buf.push("</div><div class=\"position left\">" + (null == (jade_interp = company.position) ? "" : jade_interp) + "</div><div class=\"period right\"><div class=\"dates right\">" + (jade.escape(null == (jade_interp = h.formatDate(company.date_start)) ? "" : jade_interp)) + (jade.escape(null == (jade_interp = ' - ') ? "" : jade_interp)));
if ( company.date_end == 'Today')
{
buf.push("Today");
}
else
{
buf.push(jade.escape(null == (jade_interp = h.formatDate(company.date_end)) ? "" : jade_interp));
}
buf.push("</div><div class=\"total right\">(" + (jade.escape((jade_interp = h.timeBetween(company.date_start, company.date_end)) == null ? '' : jade_interp)) + ")</div></div><div class=\"clear\"></div></div><div class=\"content\">" + (null == (jade_interp = h.markdown(company.description)) ? "" : jade_interp) + "</div></div>");
    }

  }
}).call(this);
}.call(this,"companies" in locals_for_with?locals_for_with.companies:typeof companies!=="undefined"?companies:undefined,"h" in locals_for_with?locals_for_with.h:typeof h!=="undefined"?h:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
},{"jade/runtime":10}],7:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, h) {
buf.push("<div id=\"header\" class=\"clearfix\"><div class=\"details\"><p class=\"name\">" + (jade.escape(null == (jade_interp = data.name) ? "" : jade_interp)) + "</p><p class=\"position\">" + (jade.escape(null == (jade_interp = data.position) ? "" : jade_interp)) + "</p><p class=\"location\">" + (jade.escape(null == (jade_interp = data.location) ? "" : jade_interp)) + "</p></div><div class=\"contact\"><p class=\"email\"><a" + (jade.attr("href", "mailto:" + (data.email) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = data.email) ? "" : jade_interp)) + "</a></p><p class=\"phone\">" + (jade.escape(null == (jade_interp = data.phone) ? "" : jade_interp)) + "</p><p class=\"social\"><a target=\"_blank\"" + (jade.attr("href", data.linkedin, true, false)) + " title=\"Linkedin\"><span class=\"icon icon-linkedin\"></span></a>&nbsp;<a target=\"_blank\"" + (jade.attr("href", data.github, true, false)) + " title=\"Github\"><span class=\"icon icon-github\"></span></a></p></div></div><div id=\"content\"><div class=\"block\"><div class=\"header\">Summary</div><div class=\"content\">" + (null == (jade_interp = h.markdown(data.summary)) ? "" : jade_interp) + "</div></div><div id=\"skills\" class=\"block\"><div class=\"header\">Skills</div><div class=\"content\"></div></div><div id=\"companies\" class=\"block\"><div class=\"header\">Work Experience</div><div class=\"content\"></div></div><div class=\"block\"><div class=\"header\">Education</div><div class=\"content\">" + (null == (jade_interp = h.markdown(data.education)) ? "" : jade_interp) + "</div></div></div>");}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"h" in locals_for_with?locals_for_with.h:typeof h!=="undefined"?h:undefined));;return buf.join("");
};
},{"jade/runtime":10}],8:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (h, skills, undefined) {
// iterate skills
;(function(){
  var $$obj = skills;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var skill = $$obj[$index];

buf.push("<div class=\"skill\"><div class=\"header\"><div class=\"title\">" + (jade.escape(null == (jade_interp = skill.category) ? "" : jade_interp)) + "</div></div><div class=\"content\">" + (null == (jade_interp = h.markdown(skill.items)) ? "" : jade_interp) + "</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var skill = $$obj[$index];

buf.push("<div class=\"skill\"><div class=\"header\"><div class=\"title\">" + (jade.escape(null == (jade_interp = skill.category) ? "" : jade_interp)) + "</div></div><div class=\"content\">" + (null == (jade_interp = h.markdown(skill.items)) ? "" : jade_interp) + "</div></div>");
    }

  }
}).call(this);
}.call(this,"h" in locals_for_with?locals_for_with.h:typeof h!=="undefined"?h:undefined,"skills" in locals_for_with?locals_for_with.skills:typeof skills!=="undefined"?skills:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
},{"jade/runtime":10}],9:[function(require,module,exports){

},{}],10:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jade = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) :
    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
    [val]).filter(nulls).join(' ');
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};


exports.style = function (val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function (style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                   'will be escaped to `&amp;`');
    };
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' +
                   'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var jade_encode_html_rules = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};
var jade_match_html = /[&<>"]/g;

function jade_encode_char(c) {
  return jade_encode_html_rules[c] || c;
}

exports.escape = jade_escape;
function jade_escape(html){
  var result = String(html).replace(jade_match_html, jade_encode_char);
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

exports.DebugItem = function DebugItem(lineno, filename) {
  this.lineno = lineno;
  this.filename = filename;
}

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"fs":9}]},{},[2]);
