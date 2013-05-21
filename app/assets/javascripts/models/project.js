app.models.Project = Backbone.Model.extend({

	localStorage: new Backbone.LocalStorage('portfolio'),

	// this tells it to listen for changes 
	// and then call the function
	initialize: function() {
		this.bind("change", this.updateTitle);
	},

	updateTitle: function() {
		this.attributes.title += " changed";
	},

	validate: function() {
		if(this.attributes.url =="") {
			return "must put url";
		}
	}


});