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

		console.log("the user is here!!!!!");
		console.log(currentUser);

		var view = new app.views.UserProjectsView( { model: currentUser});
		$('#content').html(view.render().el);
	}

});
