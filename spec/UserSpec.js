describe("A User", function() {
	var user;

	beforeEach(function() {
		user = new app.models.User({
			firstName: 'Oren',
			lastName: 'Bnv',
			imageUrl: 'uploads/me.jpg',
			bio: "my bio",
			mission: "my mission"
		});
	});

	it("should know how to print the entire name", function() {
		expect(user.fullName()).toEqual("Oren Bnv");
	});


});