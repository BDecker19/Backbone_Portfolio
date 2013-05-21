describe("A User", function() {
	var user;

	beforeEach(function() {
		user = new app.models.User({
			firstName: 'Oren',
			lastName: 'Bnv',
			// imageUrl: 'uploads/me.jpg',
			bio: "my bio is my bio",
			mission: "my mission is my mission is my mission"
		});
	});

	it("should know how to print the entire name", function() {
		expect(user.fullName()).toEqual("Oren Bnv");
	});

	it("should have a default picture if no picture uploaded", function(){
		expect(user.attributes.imageUrl).toEqual('uploads/someone.jpg');
	});

	describe("Validation", function(){
		
		it("should have a valid first name", function(){
			user.set({ firstName : "" });
			expect(user.isValid()).toBeFalsy();
			user.set({ firstName : null });
			expect(user.isValid()).toBeFalsy();
			user.set({ firstName : undefined });
			expect(user.isValid()).toBeFalsy();
		});

		it("should have a valid last name", function(){
			user.set({ lastName : "" });
			expect(user.isValid()).toBeFalsy();
			user.set({ lastName : null });
			expect(user.isValid()).toBeFalsy();
			user.set({ lastName : undefined });
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



});