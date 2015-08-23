function goToController(controller) {
  var nav = Alloy.Globals.nav;
  nav.setFirstView({
    controller: controller
  });
}

function menuAction(opts) {
	var controller = opts.source.pageid;
	goToController(controller);
}
