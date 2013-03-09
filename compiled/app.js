(function() {
  var _ref;

  if ((_ref = window.App) == null) {
    window.App = {};
  }

  App.Views = {};

  $(document).ready(function() {
    return new App.Views.Main({
      el: '#wrapper'
    }).render();
  });

}).call(this);
(function() {

  App.Helpers = {
    markdown: function(text) {
      var converter;
      converter = new Markdown.Converter();
      return converter.makeHtml(text);
    },
    time_between: function(start, end) {
      if (end === 'Today') {
        end = new Date;
      }
      return moment(end).from(start, true);
    },
    format_date: function(date, format) {
      if (format == null) {
        format = 'MMM YYYY';
      }
      return moment(date).format(format);
    }
  };

  HAML.globals = function() {
    return App.Helpers;
  };

}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["templates/company"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='header'>\n  <div class='left title'>");
  if (this.url) {
    $o.push("    <a href='" + ($e($c(this.url))) + "' target='_blank'>");
    $o.push("      " + $e($c(this.name)));
    $o.push("    </a>");
  } else {
    $o.push("    " + $e($c(this.name)));
      }
      $o.push("  </div>\n  <div class='left position'>");
      $o.push("    " + $c(this.position));
      $o.push("  </div>\n  <div class='period right'>\n    <div class='dates right'>");
      $o.push("      " + $e($c(this.format_date(this.date_start))));
      $o.push("      \-");
  if (this.date_end === 'Today') {
    $o.push("      Today");
  } else {
    $o.push("      " + $e($c(this.format_date(this.date_end))));
      }
      $o.push("    </div>\n    <div class='right total'>\n      (" + (this.time_between(this.date_start, this.date_end)) + ")\n    </div>\n  </div>\n  <div class='clear'></div>\n</div>\n<div class='description'>");
      $o.push("  " + $c(this.markdown(this.description)));
      $o.push("</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["templates/main"] = (function(context) {
    return (function() {
      var $c, $e, $o, category, company, _i, _j, _len, _len1, _ref, _ref1;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='clearfix' id='header'>\n  <div class='left'>\n    <div class='name'>Sergey Varaksin</div>\n    <div class='profession'>Ruby on Rails Developer</div>\n  </div>\n  <div class='details right'>\n    <p class='email'>\n      <a href='mailto:" + ($e($c(this.data.email))) + "'>");
      $o.push("        " + $e($c(this.data.email)));
      $o.push("      </a>\n    </p>\n    <p class='phone'>\n      <phone>" + ($e($c(this.data.phone))) + "</phone>\n    </p>\n    <br>\n    <p class='social'>\n      <a target='_blank' href='" + ($e($c(this.data.linkedin))) + "' title='Linkedin'>\n        <image src='public/images/linkedin_32.png'></image>\n      </a>\n      <a target='_blank' href='" + ($e($c(this.data.github))) + "' title='Github'>\n        <image src='public/images/github_32.png'></image>\n      </a>\n    </p>\n  </div>\n</div>\n<div id='content'>\n  <div class='block'>\n    <div class='header'>Summary</div>\n    <div class='content'>");
      $o.push("      " + $c(this.markdown(this.data.summary)));
      $o.push("    </div>\n  </div>\n  <div class='block' id='skills'>\n    <div class='header'>Skills</div>\n    <div class='content'>");
  _ref = this.data.skills;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    category = _ref[_i];
    $o.push("      " + $c(JST['templates/skills'](category)));
      }
      $o.push("    </div>\n  </div>\n  <div class='block' id='companies'>\n    <div class='header'>Work Experience</div>\n    <div class='content'>");
  _ref1 = this.data.companies;
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    company = _ref1[_j];
    $o.push("      " + $c(JST['templates/company'](company)));
      }
      $o.push("    </div>\n  </div>\n  <div class='block'>\n    <div class='header'>Education</div>\n    <div class='content'>");
      $o.push("      " + $c(this.markdown(this.data.education)));
      $o.push("    </div>\n  </div>\n</div>\n<div id='footer'></div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["templates/skills"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='header'>\n  <div class='title'>" + ($e($c(this.category))) + "</div>\n</div>\n<div class='description'>");
      $o.push("  " + $c(this.markdown(this.items)));
      $o.push("</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.Main = (function(_super) {

    __extends(Main, _super);

    function Main() {
      return Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.template = JST['templates/main'];

    Main.prototype.render = function() {
      return this.$el.html(this.template({
        data: App.data
      }));
    };

    return Main;

  })(Backbone.View);

}).call(this);
