app.views.HomeView = Backbone.View.extend({

	template: JST['templates/home'],

	events: {
    'click .user-card' : 'showUser'
    },
	
	render: function(){

    	this.$el.html(this.template());

    	// get all the current users from the database 
    	var all_users = new app.collections.UserList();
        var homeEl = this;

    	all_users.fetch({

            success: function(users) {
                users.forEach(function(user) {
                    var userCard = new app.views.UserCardView({ model: user });
                    homeEl.$el.find("#user-list").append(userCard.render().el);
                });          

            }
        });

		return this;
	},

	showUser: function() {
        event.preventDefault();
        var id = $(event.target).data("id");
        new app.routers.Router().navigate('users/' + id, {trigger: true});
  }

});