var args = arguments[0] || {};

function render() {
    Alloy.Globals.log.write('Args: ' + JSON.stringify(args,null,'\t'));
    $.container.setHeight(args.tabStripHeight);
    $.container.setBackgroundColor(args.tabStripColor);
}

render();