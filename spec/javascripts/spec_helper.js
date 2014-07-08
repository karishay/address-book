//= require application.js.erb
//= require_self

var d = document;
d.write('<div id="ember-testing-container"><div id="ember-testing"></div></div\>');

AddressBook.rootElement = "#ember-testing"
AddressBook.setupForTesting();
AddressBook.injectTestHelpers();
