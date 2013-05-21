app.models.User = Backbone.Model.extend({

	fullName: function() {
		return this.attributes.firstName + " " + this.attributes.lastName;
	}

});