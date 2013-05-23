app.routers.Router = Backbone.Router.extend({
	
	routes: {
		'' : 'home',
		'users/:id' : "showUser"
	},

	home: function() {
		var homeView = new app.views.HomeView();
		$('#content').html(homeView.render().el);

	},

	showUser: function(userId) {
		var currentUser = new app.models.User({id: userId});
		currentUser.fetch();

		var userView = new app.views.UserView();
		$('#content').html(homeView.render().el);

		console.log("the user is here!!!!!");
		console.log(user.toJSON());

	}

});
