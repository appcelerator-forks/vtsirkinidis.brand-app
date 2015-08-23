var Q = require('boot/q');

Alloy.Globals.log = require('boot/log');
Alloy.Globals.dispatcher = require('boot/dispatcher');
Alloy.Globals.events = require('boot/events');
var facebook = require('facebook');
facebook.permissions = [];
facebook.initialize(1000);
Alloy.Globals.facebook = facebook;
