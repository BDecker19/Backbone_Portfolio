app.views.HomeView = Backbone.View.extend({

	template: JST['templates/home'],
	
	render: function(){
		this.$el.html(this.template());
		return this;
	}

});