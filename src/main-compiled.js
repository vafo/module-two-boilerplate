'use strict';

var _handlers = require('./handlers');

require('./main.css');

document.addEventListener('DOMContentLoaded', function () {
  // add search button click handler here
  var button = document.querySelector('#search');
  button.addEventListener('click', _handlers.handleSearchClick);
});

//# sourceMappingURL=main-compiled.js.map