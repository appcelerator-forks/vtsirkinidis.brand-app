var log = Alloy.Globals.log;
var tag = '[INDEX]';
var _navgiation;
var dispatcher = Alloy.Globals.dispatcher;
var events = Alloy.Globals.events;

function init() {
    var menu = Alloy.createController("menu");
    var main = Alloy.createController("home");

    $.menu.add(menu.getView());
    $.main.add(main.getView());

    var Navigation = require('boot/navigation');
    _navgiation = Navigation({
        display: $.display,
        menu: $.menu,
        main: $.main,
        container: main.getPlaceholder(),
        backButton: main.getBackButton(),
        menuButton: main.getMenuButton()
    });
    Alloy.Globals.nav = _navgiation;

    $.appFrame.addEventListener('androidback', back);
    dispatcher.on(events.APP_EXIT, exit);
	disableActionBar();
  attachFacebookProxy();
	$.appFrame.open();
}

function disableActionBar() {
	$.appFrame.addEventListener('open', function(){
		if (OS_ANDROID) {
			if (! $.appFrame.activity) {
				log.write('Cannot hide action bar.',tag);
			} else {
				var actionBar = $.appFrame.activity.actionBar;
				if (actionBar) {
					actionBar.hide();
				}
			}
		}
	});
}

function attachFacebookProxy() {
	if (OS_IOS) {
		return;
	}
	var fb = Alloy.Globals.facebook;
	$.appFrame.fbProxy = fb.createActivityWorker({lifecycleContainer: $.appFrame});
}

function back() {
    Alloy.Globals.nav.goBack();
}

function exit() {
    Alloy.Globals.androidexit.exit(function() {
        $.appFrame.close();
    });
}

init();
