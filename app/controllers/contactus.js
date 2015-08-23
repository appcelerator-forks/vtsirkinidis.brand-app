var args = arguments[0] || {};

function render() {
	var contacts = args.contacts;
	_.each(contacts, function(contact){
		$.content.add(Alloy.createController('contactrow', contact).getView());
	});
}

render();
