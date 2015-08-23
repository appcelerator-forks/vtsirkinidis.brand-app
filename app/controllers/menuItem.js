var args = arguments[0] || {};

var label = args.label;
var controller = args.type;
var config = args.config;

function render() {
	$.menuLabel.setText(L(label));
}

function menuAction() {
	var nav = Alloy.Globals.nav;
	nav.setFirstView({
		controller:controller,
		arguments:config
	});
}

render();
