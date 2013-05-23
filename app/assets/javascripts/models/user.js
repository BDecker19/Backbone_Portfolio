app.models.User = Backbone.Model.extend({

	initialize: function() {
		if (!this.isValid()) {
			alert(this.validationError);
		};
	},

	fullName: function() {
		return this.attributes.first_name + " " + this.attributes.last_name;
	},

	defaults: {
		image_url : 'uploads/someone.jpg'
	},

	validate: function(attr){
		var errors = new Array;
		if (typeof attr.first_name == undefined || attr.first_name == null || attr.first_name == "") {
			errors += "first name is not valid, ";
		};
		if (typeof attr.last_name == undefined || attr.last_name == null || attr.last_name == "") {
			errors += "last name is not valid, ";
		};
		if (typeof attr.bio == undefined || attr.bio == null || attr.bio.length < 10) {
			errors += "bio is not valid at least 10 characters required, ";
		};
		if (typeof attr.mission == undefined || attr.mission == null || attr.mission.length < 20) {
			errors += "mission is not valid at least 20 characters required, ";
		};
		if (errors.length == 0) {
			errors = undefined;
		}
		return errors;
	}

});