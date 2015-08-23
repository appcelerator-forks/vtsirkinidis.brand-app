var args = arguments[0] || {};

function render() {
	var label = L(args.label);
	var icon = Alloy.CFG.font[args.icon];
	$.content.setIcon(icon);
	$.content.setText(label);
}

function doContact() {
	var type = args.type;
	var value = args.value;
	if (type === 'website') {
		openPage(value);
	}

	if (type === 'phone') {
		callPhone(value);
	}

	if (type === 'email') {
		sendEmail(value);
	}
}

function sendEmail(value) {
	Ti.UI.createEmailDialog({
    toRecipients: [value]
  }).open();
}
function callPhone(value) {
	Ti.Platform.openURL('tel:'+value);
}
function openPage(value) {
	Ti.Platform.openURL(value);
}

render();
