describe('user-activities', () => {
	beforeEach(() => {
		this.userActivitiesCtrl = require('./user-activities');
	});

	it('has getActivityById defined', () => {
		expect(this.userActivitiesCtrl.getActivityById).toBeDefined();
	});


});