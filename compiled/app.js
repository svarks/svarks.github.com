(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MainView, data;

MainView = require('./views/main');

data = require('./data.yml');

$(document).ready(function() {
  var view;
  $('title').html([data.name, data.position].join(' - '));
  view = new MainView({
    el: '#wrapper'
  });
  return view.render(data);
});


},{"./data.yml":2,"./views/main":7}],2:[function(require,module,exports){
module.exports = {"name":"Sergey Varaksin","position":"Ruby on Rails Engineer","email":"varaksin86@gmail.com","phone":"+1 (312) 823-6093","github":"http://github.com/svarks","linkedin":"http://www.linkedin.com/in/svarks","summary":"\nI have full stack web development experience from writing html and javascript on client side to setting up application deployment process and server administration.\n\nSimplicity is a key for me and I love ruby for that.\n","skills":[{"category":"Ruby","items":"\n- **Rails**\n- Sinatra\n- **RSpec**\n- Cucumber\n- **Haml / Sass / Coffescript**\n- **Sidekiq**\n"},{"category":"Javascript","items":"\n- **jQuery**\n- **Backbone.js**\n- D3.js\n- Angular.js\n- Prototype\n- Dojo\n- YUI\n- Mootools\n"},{"category":"Databases","items":"\n- **PostgreSQL**\n- **MongoDB**\n- **Redis**\n- MySQL\n"},{"category":"Deployment","items":"\n- **Capistrano**\n- **Nginx + Unicorn**\n- Puppet / Chef\n"},{"category":"Preferred Tools","items":"\n- **MacOSX**\n- **Vim**\n- **Git**\n- **Zsh + Tmux**\n"}],"companies":[{"name":"Triggit Inc.","url":"http://www.triggit.com/","date_start":"12/2/2013","date_end":"04/11/2014","position":"Web Engineer","description":"\n\n* Worked on refactoring monolithic rails app into rails API + Angular.js client on frontend\n* Building cross-browser javascript widget using node.js\n"},{"name":"Remind101 Inc.","url":"https://www.remind101.com/","date_start":"08/08/2013","date_end":"11/28/2013","position":"Web Engineer","description":"\nFull stack web engeneer:\n\n* Rails / Sinatra\n* PostgreSQL\n* Angular.js / Coffeescript\n* Worked on lots of performance optimisations\n"},{"name":"Groupon Inc.","url":"http://www.groupon.com/","date_start":"11/27/2012","date_end":"08/06/2013","position":"Ruby on Rails Consultant","description":"\nInternal web application for sales department.\n\n* Backbone.js on frontend side\n* Back end API that integrates with internal CRM\n* ETL data processes\n"},{"name":"Sears Holdings Corporation","url":"http://www.searsholdings.com/","date_start":"02/01/2012","date_end":"11/26/2012","position":"Ruby on Rails Consultant","description":"\n<http://kenmoreconnect.com/>\n\n* I had taken a lead developer role on new project providing post-purchase experience for retail store customers.\n* Rich client interface that fully degrades to iPhone screen.\n* Large data import and processing.\n"},{"name":"Sphere Consulting Inc.","url":"http://sphereinc.com/","date_start":"04/01/2011","date_end":"02/01/2012","position":"Ruby on Rails Developer","description":"\nWorked as consultant on many projects, doing the following:\n\n* backend and frontend development\n* code refactoring and optimisation\n* production environment setup\n* data migrations\n"},{"name":"Freelance","date_start":"03/01/2009","date_end":"04/01/2011","position":"Ruby on Rails Developer","description":"\nI had multiple rails contracts working as a full stack consultant.\n"},{"name":"Sibers","url":"http://sibers.com/","date_start":"08/01/2008","date_end":"03/01/2009","position":"PHP Developer","description":"\nWorked on many projects using these technologies:\n\n  - Zend Framework, Symfony\n  - Mysql, Lucene\n  - JQuery, Dojo\n"},{"name":"New Siberia LLC","date_start":"09/01/2006","date_end":"06/01/2008","position":"PHP Developer,<br/> Web Server Administrator","description":"\n- Implemented CRM system from scratch using PHP\n- Web server administration\n"}],"education":"\nNSAWT, Novosibirsk, Russia\n\nMS, Computer Science\n\n2003 - 2008\n"}
},{}],3:[function(require,module,exports){
var dateFormats;

dateFormats = ['MM/DD/YYYY', 'YYYY-MM-DD'];

module.exports = {
  markdown: function(text) {
    return markdown.toHTML(text);
  },
  timeBetween: function(start, end) {
    start = moment(start, dateFormats);
    if (end === 'Today') {
      end = new Date;
    }
    return moment(end, dateFormats).from(start, true);
  },
  formatDate: function(date, format) {
    if (format == null) {
      format = 'MMM YYYY';
    }
    return moment(date, dateFormats).format(format);
  }
};


},{}],4:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (companies, h) {
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
buf.push("</div><div class=\"position left\">" + (null == (jade_interp = company.position) ? "" : jade_interp) + "</div><div class=\"period right\"><div class=\"dates right\">" + (jade.escape(null == (jade_interp = h.formatDate(company.date_start)) ? "" : jade_interp)) + " - ");
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
buf.push("</div><div class=\"position left\">" + (null == (jade_interp = company.position) ? "" : jade_interp) + "</div><div class=\"period right\"><div class=\"dates right\">" + (jade.escape(null == (jade_interp = h.formatDate(company.date_start)) ? "" : jade_interp)) + " - ");
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
}("companies" in locals_for_with?locals_for_with.companies:typeof companies!=="undefined"?companies:undefined,"h" in locals_for_with?locals_for_with.h:typeof h!=="undefined"?h:undefined));;return buf.join("");
};
},{"jade/runtime":8}],5:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, h) {
buf.push("<div id=\"header\" class=\"clearfix\"><div class=\"left\"><div class=\"name\">" + (jade.escape(null == (jade_interp = data.name) ? "" : jade_interp)) + "</div><div class=\"profession\">" + (jade.escape(null == (jade_interp = data.position) ? "" : jade_interp)) + "</div></div><div class=\"details right\"><p class=\"email\"><a" + (jade.attr("href", "mailto:" + (data.email) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = data.email) ? "" : jade_interp)) + "</a></p><p class=\"phone\"><phone>" + (jade.escape(null == (jade_interp = data.phone) ? "" : jade_interp)) + "</phone></p><p class=\"social\"><a target=\"_blank\"" + (jade.attr("href", data.linkedin, true, false)) + " title=\"Linkedin\"><span class=\"icon icon-linkedin\"></span></a><a target=\"_blank\"" + (jade.attr("href", data.github, true, false)) + " title=\"Github\"><span class=\"icon icon-github\"></span></a></p></div></div><div id=\"content\"><div class=\"block\"><div class=\"header\">Summary</div><div class=\"content\">" + (null == (jade_interp = h.markdown(data.summary)) ? "" : jade_interp) + "</div></div><div id=\"skills\" class=\"block\"><div class=\"header\">Skills</div><div class=\"content\"></div></div><div id=\"companies\" class=\"block\"><div class=\"header\">Work Experience</div><div class=\"content\"></div></div><div class=\"block\"><div class=\"header\">Education</div><div class=\"content\">" + (null == (jade_interp = h.markdown(data.education)) ? "" : jade_interp) + "</div></div></div><div id=\"footer\"></div>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"h" in locals_for_with?locals_for_with.h:typeof h!=="undefined"?h:undefined));;return buf.join("");
};
},{"jade/runtime":8}],6:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (skills, h) {
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
}("skills" in locals_for_with?locals_for_with.skills:typeof skills!=="undefined"?skills:undefined,"h" in locals_for_with?locals_for_with.h:typeof h!=="undefined"?h:undefined));;return buf.join("");
};
},{"jade/runtime":8}],7:[function(require,module,exports){
var Helpers, MainView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Helpers = require('../helpers');

MainView = (function(_super) {
  __extends(MainView, _super);

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


},{"../helpers":3,"../templates/companies":4,"../templates/main":5,"../templates/skills":6}],8:[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.jade=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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
  return Array.isArray(val) ? val.map(joinClasses).filter(nulls).join(' ') : val;
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
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
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

exports.escape = function escape(html){
  var result = String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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
    str =  str || _dereq_('fs').readFileSync(filename, 'utf8')
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

},{"fs":2}],2:[function(_dereq_,module,exports){

},{}]},{},[1])
(1)
});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])