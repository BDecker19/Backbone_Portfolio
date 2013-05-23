$(document).ready(function() {

  var router = new app.routers.Router();
  Backbone.history.start({pushState: true});
  router.navigate('');

});