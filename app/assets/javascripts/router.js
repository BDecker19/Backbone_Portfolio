app.routers.Router = Backbone.Router.extend({
	
	routes: {
		'' : 'home'
	},

	home: function() {
		var homeView = new app.views.HomeView();
		$('#content').html(homeView.render().el);
	}

});