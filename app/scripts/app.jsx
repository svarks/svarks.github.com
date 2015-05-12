const data = require('../data.yml');
const Page = require('./page');

const init = function() {
  require('./ga.js');

  ga('create', 'UA-52492818-1', 'auto');
  ga('send', 'pageview');

  $('title').html([data.name, data.position].join(' - '))

  $('body').on('click', 'a', function() {
    ga('send', 'event', 'outbound', 'click', this.href);
  });

  ReactDOM.render(<Page data={data} />, $('#wrapper')[0]);
};

init();
