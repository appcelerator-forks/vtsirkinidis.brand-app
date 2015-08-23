function render() {
  var menu = Alloy.CFG.settings.menu;
  _.each(menu, function(menuItem){
    $.menuTable.add(Alloy.createController('menuItem', menuItem).getView());
  });
}

render();
