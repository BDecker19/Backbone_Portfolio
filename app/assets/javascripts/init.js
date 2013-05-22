$(document).ready(function() {

  localStorage.clear(); 
  createDummyUsers();

  var router = new app.routers.Router();
  Backbone.history.start({pushState: true});
  router.navigate('');

});