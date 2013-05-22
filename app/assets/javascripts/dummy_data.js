$(document).ready(function() {
  // // Try to find projects already in the local storage
  // var projectList = new app.collections.ProjectList();
  // projectList.fetch();

  // // Create a dummy project if there isn't one already
  // if(projectList.length == 0) {
  //   var bucket_list = projectList.create({
  //     title: "Bucketlist",
  //     url: "https://github.com/dmgarland/BucketListApp",
  //     body: "<p>I worked on a Rails application that created a todo list of things I want to do before I die.</p> <ul> <li>I integrated Google maps and used Geocoding to determine where my activities would take place.</li> <li>I used AJAX to asynchronously update markers on the map when the center changed.</li> <li>I displayed crime statistics on a chart using an API call and Morris.js</li> </ul>"
  //   });
  // }

  // // Create a blank project for us to fill in.
  // projectList.add({
  //   title: "New Project",
  //   url: "Click to edit",
  //   body: "Click to edit"
  // });

  // projectList.forEach(function(project) {
  //   var view = new app.views.ProjectView({ model: project });
  //   $('#project-list').append(view.render().el);
  // });

  // // Create a view for the first Project and render it
  // // var view = new app.views.ProjectView({ model: projectList.first() });
  // // $('#project-list').append(view.render().el);



  // creates and save dummy users:

  createDummyUsers = function() {

    var someone1 = new app.models.User({
      firstName: "first1",
      lastName: "last1",
      imageUrl: "uploads/someone.jpg",
      bio: "someone's 1 bio is here",
      mission: "someone's 1 mission is to have someone's mission here"
    });

    // someone1.save();
    // console.log("created and saved dummy user:");
    // console.log(someone1);

    var someone2 = new app.models.User({
      firstName: "first2",
      lastName: "last2",
      imageUrl: "uploads/someone.jpg",
      bio: "someone's 2 bio is here",
      mission: "someone's 2 mission is to have someone's mission here"
    });

    // someone2.save();
    // console.log("created and saved dummy user:");
    // console.log(someone2);

  
  

  // create a dummy users collection and saves it to the database
  var someUsers = new app.collections.UserList();
  someUsers.create(someone1);
  someUsers.create(someone2);
  console.log("dummy users in the collection:")
  console.log(someUsers.toJSON());
  // someUsers.sync();
};

});