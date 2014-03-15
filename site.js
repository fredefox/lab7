// Global scope
function Site() {};
Site.prototype = {
	Views: {
		games: {
			data: {
				view: "view_games"
			}
		}
	},
	load: function(view) {
		var data = this.Views[view]["data"];
		$.post("rpc.php", data, function(data, status) {
			console.info(data);
		}, "json").fail(function(jqXHR, status, b, l, a) {
			console.error(jqXHR, status, b, l, a);
		});
	}
};
var Site = new Site();
// On document ready
$(function() {
	Site.load("games")
});