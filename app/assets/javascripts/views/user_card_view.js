app.views.UserCardView = Backbone.View.extend({

	tagName: 'div',
	template: JST['templates/_user_card'],
	className: 'user-card',
	render: function() {
		//get the template html
		var html = this.template({
			user: this.model
		});

		//append it to this view's div#bio element
		this.$el.html(html);

		//attach it to the dom to div#user-bio
		// $('#user-bio').html(this.el);
		return this;
	}

});