var args = arguments[0] || {};
var ui = require('boot/ui');

function render() {
	ui.addBorder($.container, [ui.BORDER.DOWN], Alloy.CFG.colors.text_color, '1dp');
	$.content.setText(args.message);
	if (! args.link) {
		$.right.setVisible(false);
	} else {
		$.right.addEventListener('click', doRedirect);
	}
}

function doRedirect() {
	Ti.Platform.openURL(args.link);
}

render();
