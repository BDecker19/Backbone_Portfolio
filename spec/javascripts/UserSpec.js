describe("A User", function() {
	var user;

	beforeEach(function() {
		user = new app.models.User({
			first_name: 'Oren',
			last_name: 'Bnv',
			bio: "my bio is my bio",
			mission: "my mission is my mission is my mission"
		});
	});

	it("should know how to print the entire name", function() {
		expect(user.fullName()).toEqual("Oren Bnv");
	});

	it("should have a default picture if no picture uploaded", function(){
		expect(user.attributes.image_url).toEqual('uploads/someone.jpg');
	});

	describe("Validation", function(){
		
		it("should have a valid first name", function(){
			user.set({ first_name : "" });
			expect(user.isValid()).toBeFalsy();
			user.set({ first_name : null });
			expect(user.isValid()).toBeFalsy();
			user.set({ first_name : undefined });
			expect(user.isValid()).toBeFalsy();
		});

		it("should have a valid last name", function(){
			user.set({ last_name : "" });
			expect(user.isValid()).toBeFalsy();
			user.set({ last_name : null });
			expect(user.isValid()).toBeFalsy();
			user.set({ last_name : undefined });
			expect(user.isValid()).toBeFalsy();
		});

		it("should have a valid bio with at least 10 characters", function(){
			user.set({ bio : "123456789" });
			expect(user.isValid()).toBeFalsy();
			user.set({ bio : null });
			expect(user.isValid()).toBeFalsy();
			user.set({ bio : undefined });
			expect(user.isValid()).toBeFalsy();
		});

		it("should have a valid mission with at least 20 characters", function(){
			user.set({ mission : "1234567890123456789" });
			expect(user.isValid()).toBeFalsy();
			user.set({ mission : null });
			expect(user.isValid()).toBeFalsy();
			user.set({ mission : undefined });
			expect(user.isValid()).toBeFalsy();
		});

	});

	describe("should save to the local storage through a collection of users", function(){
		// beforeEach(function() {
		// 	// clear the localStorage
		// 	localStorage.clear();

		// 	user1 = new app.models.User({
		// 		first_name: 'Oren1',
		// 		last_name: 'Bnv1',
		// 		image_url: "uploads/someone.jpg",
		// 		bio: "my bio1 is my bio1",
		// 		mission: "my mission1 is my mission1 is my mission1"
		// 	});

		// 	user2 = new app.models.User({
		// 		first_name: 'Oren2',
		// 		last_name: 'Bnv2',
		// 		image_url: "uploads/someone.jpg",
		// 		bio: "my bio2 is my bio2",
		// 		mission: "my mission2 is my mission2 is my mission2"
		// 	});

		// 	var userList = new app.collections.UserList();
		// 	userList.create(user1);
		// 	userList.create(user2);
		// });

		// it("should persist in the database and be fetched correctly", function() {
		// 	var newUserList = new app.collections.UserList();
		// 	consloe.log("blahhhhhhh");
		// 	consloe.log(newUserList.fetch());
		// 	expect(newUserList.fetch()).toEqual(2);
		// });
		
		// it("afda", function(){

		// });

	});


});