app.views.HomeView = Backbone.View.extend({

	template: JST['templates/home'],
	
	render: function(){
		this.$el.html(this.template());

		// get all the current users from the database / storage
		var all_users = new app.collections.UserList();
		all_users.fetch();

		console.log("homepage loaded these users from the database:");
		console.log(all_users.toJSON());

		var homeEl = this;

    all_users.forEach(function(user) {
    	console.log("loading card for user:");
    	console.log(user.toJSON());
    	console.log()

    	var userCard = new app.views.UserCardView({ model: user });

    	homeEl.$el.find("#user-list").append(userCard.render().el);
    
      // homeEl.$el.find("#user-list").append("<p><a href='#' class='user-link' data-id='" + user.id + "'>" + user.fullName() + "</a></p>");
    });

		return this;
	}

});