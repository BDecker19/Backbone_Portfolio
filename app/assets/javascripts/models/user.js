app.models.User = Backbone.Model.extend({

	// localStorage: new Backbone.LocalStorage('portfolio-users'),

	initialize: function() {
		if (!this.isValid()) {
			alert(this.validationError);
		};
	},

	fullName: function() {
		return this.attributes.firstName + " " + this.attributes.lastName;
	},

	defaults: {
		imageUrl : 'uploads/someone.jpg'
	},

	validate: function(attr){
		var errors = new Array;
		if (typeof attr.firstName == undefined || attr.firstName == null || attr.firstName == "") {
			errors += "first name is not valid, ";
		};
		if (typeof attr.lastName == undefined || attr.lastName == null || attr.lastName == "") {
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