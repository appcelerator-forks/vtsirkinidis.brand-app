var args = arguments[0] || {};
var ui = require('boot/ui');
var loader = ui.getSmallLoader();

function render() {
	var facebookid = args.facebookid;
	getNews(facebookid);
}

function getNews(facebookid) {
	loader.show();
	var facebook = Alloy.Globals.facebook;
	if (facebook.loggedIn) {
		fetch();
	} else {
		facebook.addEventListener('login', fetch);
		facebook.authorize();
	}

	function fetch() {
		facebook.removeEventListener('login', fetch);
		facebook.requestWithGraphPath(facebookid+'/posts', {fields:'message,story,created_time,link'}, 'GET', function(opts){
			loader.hide();
			if (opts.success) {
				var posts = JSON.parse(opts.result).data;
				displayNews(posts);
			} else {
					ui.msg(L('warning'), L('could_not_fetch_posts'));
			}
		});
	}

}

function displayNews(posts) {
	$.list.removeAllChildren();
	_.each(posts, function(post){
		if (! post.story) {
			$.list.add(Alloy.createController('newsrow', post).getView());
		}
	});
}

function doRefresh() {
	render();
}

render();
